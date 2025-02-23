// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/Login';
import HomeScreen from './pages/HomeScreen';
import ChatPage from './pages/ChatPage';
import ProductPage from './pages/ProductPage';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/product/:productName" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
