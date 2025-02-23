// src/components/ChatBox.jsx
import React from 'react';
import styles from './ChatBox.module.css';

const ChatBox = ({ messages, newMessage, onNewMessageChange, onSendMessage, isOpen, toggleChat }) => {
    return (
        <div className={styles.chatContainer}>
            {/* Chat Header */}
            <div className={styles.chatHeader} onClick={toggleChat}>
                {/* <img src={profile} alt="Profile" className={styles.profile} /> */}
                <span>Messaging</span>
                <button className={styles.toggleButton}>{isOpen ? "—" : "+"}</button>
            </div>

            {/* Chat Box Messages */}
            {isOpen && (
                <div className={styles.chatBox}>
                    <div className={styles.messages}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={
                                    msg.sender === "user" ? styles.userMessage : styles.friendMessage
                                }
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <form onSubmit={onSendMessage} className={styles.chatInput}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={onNewMessageChange}
                            placeholder="Type a message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBox;
