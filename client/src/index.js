import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import LoginPage from "./pages/loginPage"
import GuestPage from './pages/guestPage';
import RegisterPage from './pages/registerPage';
import UserPage from "./pages/userPage"
import AdminBookPage from "./pages/adminBookPage"
import AdminUserPage from "./pages/adminUserPage"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="GuestPage" element={<GuestPage />} />
          <Route path="RegisterPage" element={<RegisterPage />} />
          <Route path="UserPage" element={<UserPage />} />
          <Route path="AdminBookPage" element={<AdminBookPage />} />
          <Route path="AdminUserPage" element={<AdminUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

