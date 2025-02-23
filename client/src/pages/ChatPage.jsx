// src/pages/ChatPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import ChatBox from '../components/ChatBox';
import './ChatPage.css';

const ChatPage = () => {
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    // This ref prevents the conversation creation logic from running more than once
    const conversationCreationAttempted = useRef(false);

    const location = useLocation();
    const attachedProduct = location.state?.attachedProduct || null;

    // Build a safe productData object
    const productData = attachedProduct
        ? {
            itemID: attachedProduct.itemID || null,
            name: attachedProduct.name || null,
            price: attachedProduct.price || null,
            image: attachedProduct.image || null,
            userSellerIDs: attachedProduct.userSellerIDs || [],
        }
        : null;

    // Current user (buyer) is 'u0' for this example
    const currentUserID = 'u0';

    // Pre-populate the message input if a product is attached
    useEffect(() => {
        if (productData) {
            setNewMessage(`I'm interested in your product: ${productData.name}`);
        }
    }, [productData]);

    // Fetch conversations from Firestore
    useEffect(() => {
        const conversationsRef = collection(db, 'conversations');
        const unsubscribe = onSnapshot(conversationsRef, (snapshot) => {
            const convos = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setConversations(convos);
        });
        return () => unsubscribe();
    }, []);

    // Check or create conversation only once using the ref
    useEffect(() => {
        // If no product data or a conversation is already selected, or we've already attempted creation, exit early
        if (!productData || selectedConversation || conversationCreationAttempted.current) {
            return;
        }

        const sellerID = productData.userSellerIDs[0] || null;
        if (!currentUserID || !sellerID) {
            console.error('Missing buyer or seller ID');
            return;
        }

        // Look for an existing conversation for this item between buyer and seller
        const existingConvo = conversations.find(
            (convo) =>
                convo.product?.itemID === productData.itemID &&
                convo.participants?.includes(currentUserID) &&
                convo.participants?.includes(sellerID)
        );

        if (existingConvo) {
            setSelectedConversation(existingConvo);
            conversationCreationAttempted.current = true; // Mark creation as attempted
        } else {
            const createConversation = async () => {
                try {
                    const conversationRef = await addDoc(collection(db, 'conversations'), {
                        title: `Chat about ${productData.name}`,
                        product: {
                            itemID: productData.itemID,
                            name: productData.name,
                            image: productData.image,
                        },
                        createdAt: serverTimestamp(),
                        participants: [currentUserID, sellerID],
                    });
                    setSelectedConversation({
                        id: conversationRef.id,
                        title: `Chat about ${productData.name}`,
                        product: {
                            itemID: productData.itemID,
                            name: productData.name,
                            image: productData.image,
                        },
                        participants: [currentUserID, sellerID],
                    });
                    conversationCreationAttempted.current = true; // Mark creation as attempted
                } catch (error) {
                    console.error('Error creating conversation:', error);
                }
            };
            createConversation();
        }
    }, [productData, conversations, selectedConversation, currentUserID]);

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
                ...doc.data(),
            }));
            setMessages(msgs);
        });
        return () => unsubscribe();
    }, [selectedConversation]);

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
                    sender: 'user',
                    product: productData
                        ? {
                            itemID: productData.itemID,
                            name: productData.name,
                            image: productData.image,
                        }
                        : null,
                }
            );
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chatpage-container">
            {/* LEFT SIDEBAR */}
            <div className="chatpage-sidebar">
                <h2>Conversations</h2>
                <ul>
                    {conversations.map((conv) => (
                        <li
                            key={conv.id}
                            onClick={() => setSelectedConversation(conv)}
                            className={selectedConversation && conv.id === selectedConversation.id ? 'active' : ''}
                        >
                            {conv.title || conv.id}
                        </li>
                    ))}
                </ul>
            </div>

            {/* MAIN CHAT AREA */}
            <div className="chatpage-main">
                {selectedConversation ? (
                    <ChatBox
                        messages={messages}
                        newMessage={newMessage}
                        onNewMessageChange={(e) => setNewMessage(e.target.value)}
                        onSendMessage={handleSendMessage}
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
