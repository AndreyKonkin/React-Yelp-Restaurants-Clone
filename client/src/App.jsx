import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AdminPage from './AdminPage/AdminPage';
import LoginPage from './AuthReg/LoginPage';
import RegistrationPage from './AuthReg/RegistrationPage';
import CafePage from './CafePage/CafePage';
import EffectsPage from './EffectsPage/EffectsPage';
import MyNavBar from './MyNavBar/MyNavBar';
import NotPage from './NotPage/NotPage';

function App() {
  return (
    <Container>
      <MyNavBar />
      <Routes>
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/Authorization" element={<LoginPage />} />
        <Route path="/Cafes" element={<CafePage />} />
        <Route path="/Effects" element={<EffectsPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </Container>
  );
}

export default App;
