import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './hooks/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


import MainNavbar from './components/MainNavbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import StoreView from './views/StoreView';
import LoginView from './views/LoginView';
import CheckedView from './views/CheckedView';


import './App.css';


function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/store" element={<StoreView />} />
          <Route path="/login" element={<LoginView />} />

          <Route path="/checked" element={isLoggedIn ? <CheckedView /> : <Navigate to="/"/>} />

          <Route path="*" element={<Navigate replace to="/" />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
