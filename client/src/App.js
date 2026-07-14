import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import TrackComplaint from './pages/TrackComplaint';
import ContactUs from './pages/ContactUs';
import Success from './pages/Success';

function App() {
  const path = window.location.pathname.toLowerCase();

  // 🔐 1. SIGN UP / CREATE ACCOUNT ROUTE
  if (path === '/signup' || path === '/register') {
    return <Register />;
  }

  // 🔑 2. USER LOGIN ROUTE
  if (path === '/login') {
    return <Login />;
  }

  // 📝 3. NEW COMPLAINT REGISTRATION FORM ROUTE
  if (path === '/register-complaint' || path === '/dashboard') {
    return <Dashboard />;
  }

  // 📊 4. ADMIN PANEL MONITORING VIEWS ROUTE
  if (path === '/admin-dashboard' || path === '/admin') {
    return <AdminDashboard />;
  }

  // 🔍 5. TICKET SEARCH AND LIFECYCLE QUERY ROUTE
  if (path === '/track-complaint') {
    return <TrackComplaint />;
  }

  // ✉️ 6. HELPDESK AND INCOMING FEEDBACK MAIL ROUTE
  if (path === '/contact') {
    return <ContactUs />;
  }

  // 🎉 7. SUBMISSION CONFIRMATION SUCCESS BADGE ROUTE
  if (path.includes('/success')) {
    return <Success />;
  }

  // 🏠 8. DEFAULT LANDING INDEX ENTRY
  return <Home />;
}

export default App;
