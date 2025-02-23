import React, { useState, useEffect } from 'react';
import {
    collection,
    doc,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase'; // Adjust the import if your firebase.js is in a different path
import './ChatPage.css'; // We'll create this next for styling

const ChatPage = () => {
    // List of all conversations
    const [conversations, setConversations] = useState([]);
    // The currently selected conversation (object with .id, etc.)
    const [selectedConversation, setSelectedConversation] = useState(null);
    // Messages for the selected conversation
    const [messages, setMessages] = useState([]);
    // New message input text
    const [newMessage, setNewMessage] = useState('');

    // Fetch all conversations (you can filter by user if needed)
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

    // Whenever selectedConversation changes, load its messages
    useEffect(() => {
        if (!selectedConversation) {
            setMessages([]);
            return;
        }
        // Reference the messages subcollection for this conversation
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
            // Add a new message to the subcollection
            await addDoc(
                collection(db, 'conversations', selectedConversation.id, 'messages'),
                {
                    text: newMessage,
                    createdAt: serverTimestamp(),
                    sender: 'Anonymous', // Replace with the current user ID or displayName if available
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
                            onClick={() => handleSelectConversation(conv)}
                            className={
                                selectedConversation && conv.id === selectedConversation.id
                                    ? 'active'
                                    : ''
                            }
                        >
                            {conv.title || conv.id}
                        </li>
                    ))}
                </ul>
            </div>

            {/* MAIN CHAT AREA */}
            <div className="chatpage-main">
                {selectedConversation ? (
                    <>
                        <div className="chatpage-messages">
                            {messages.map((msg) => (
                                <div key={msg.id} className="chatpage-message">
                                    <strong>{msg.sender}: </strong>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <form className="chatpage-form" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </>
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
