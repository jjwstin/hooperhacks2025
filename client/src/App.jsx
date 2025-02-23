// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomeScreen from './pages/HomeScreen';
import ChatPage from './pages/ChatPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/product/:productName" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
