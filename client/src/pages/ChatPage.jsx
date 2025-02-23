// src/pages/ChatPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase'; // Adjust the path as needed
import './ChatPage.css'; // Page-specific styles
import ChatBox from '../components/ChatBox'; // We'll create this next

const ChatPage = () => {
    // State for conversations and the selected conversation
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    // Messages for the selected conversation
    const [messages, setMessages] = useState([]);
    // New message input text
    const [newMessage, setNewMessage] = useState('');

    const location = useLocation();
    // console.log(location.state)
    // Check if an attached product was passed via state from the ProductPage
    const attachedProduct = location.state?.attachedProduct || null;
    console.log('Attached Product:', attachedProduct);


    // Pre-populate message input if a product is attached
    useEffect(() => {
        if (attachedProduct) {
            setNewMessage(`I'm interested in your product: ${attachedProduct.name}`);
        }
    }, [attachedProduct]);

    // Fetch all conversations (optionally, filter by current user)
    useEffect(() => {
        const conversationsRef = collection(db, 'conversations');
        const unsubscribe = onSnapshot(conversationsRef, (snapshot) => {
            const convos = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setConversations(convos);
        });
        return () => unsubscribe();
    }, []);

    // If an attached product is provided and no conversation is selected,
    // check if a conversation for that product already exists; if not, create one.
    useEffect(() => {
        if (attachedProduct && !selectedConversation) {
            const existingConvo = conversations.find(
                (convo) => convo.product && convo.product.id === attachedProduct.id
            );
            if (existingConvo) {
                setSelectedConversation(existingConvo);
            } else {
                const createConversation = async () => {
                    try {
                        const conversationRef = await addDoc(collection(db, 'conversations'), {
                            title: `Chat about ${attachedProduct.name}`,
                            product: {
                                id: attachedProduct.id,
                                name: attachedProduct.name,
                                image: attachedProduct.image
                            },
                            createdAt: serverTimestamp(),
                            // In a real app, include buyer and seller IDs
                            participants: ['Anonymous', 'Seller'] // Placeholder values
                        });
                        setSelectedConversation({
                            id: conversationRef.id,
                            title: `Chat about ${attachedProduct.name}`,
                            product: attachedProduct
                        });
                    } catch (error) {
                        console.error('Error creating conversation:', error);
                    }
                };
                createConversation();
            }
        }
    }, [attachedProduct, conversations, selectedConversation]);

    // Load messages for the selected conversation
    useEffect(() => {
        if (!selectedConversation) {
            setMessages([]);
            return;
        }
        const messagesRef = collection(db, 'conversations', selectedConversation.id, 'messages');
        const q = query(messagesRef, orderBy('createdAt', 'asc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(msgs);
        });
        return () => unsubscribe();
    }, [selectedConversation]);

    // Handle selecting a conversation from the sidebar
    const handleSelectConversation = (conversation) => {
        setSelectedConversation(conversation);
    };

    // Handle sending a message
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !selectedConversation) return;

        try {
            await addDoc(
                collection(db, 'conversations', selectedConversation.id, 'messages'),
                {
                    text: newMessage,
                    createdAt: serverTimestamp(),
                    sender: 'Anonymous', // Replace with authenticated user info when available
                    // Optionally attach product details if relevant
                    product: attachedProduct
                        ? {
                            id: attachedProduct.id,
                            name: attachedProduct.name,
                            image: attachedProduct.image
                        }
                        : null
                }
            );
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chatpage-container">
            {/* LEFT SIDEBAR: Conversation List */}
            <div className="chatpage-sidebar">
                <h2>Conversations</h2>
                <ul>
                    {conversations.map((conv) => (
                        <li
                            key={conv.id}
                            onClick={() => handleSelectConversation(conv)}
                            className={selectedConversation && conv.id === selectedConversation.id ? 'active' : ''}
                        >
                            {conv.title || conv.id}
                        </li>
                    ))}
                </ul>
            </div>

            {/* MAIN CHAT AREA: Using ChatBox for message display */}
            <div className="chatpage-main">
                {selectedConversation ? (
                    <ChatBox
                        messages={messages}
                        newMessage={newMessage}
                        onNewMessageChange={(e) => setNewMessage(e.target.value)}
                        onSendMessage={handleSendMessage}
                        // Here, we assume the ChatBox is always open in this layout.
                        isOpen={true}
                        toggleChat={() => { }}
                    />
                ) : (
                    <div className="chatpage-placeholder">
                        <p>Select a conversation to start chatting</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatPage;
