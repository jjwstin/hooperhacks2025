import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Login from './pages/Login';
import HomeScreen from './pages/HomeScreen';
import ChatPage from './pages/ChatPage';
import ProductPage from './pages/ProductPage';
import CheckOutPage from './pages/CheckOutPage'; // Import the CheckOutPage component
import NavBar from './components/navBar';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Header />}
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/product/:productName" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckOutPage />} /> {/* Define the route for CheckOutPage */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
