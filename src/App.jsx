import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MyProfile from './pages/MyProfile';




function App() {
    return (
        <>
            <Routes>
                <Route path="/login" exact element={<LoginPage />} />
                <Route path="/search" exact element={<SearchPage />} />
        <Route path="/myprofile" exact element={<MyProfile />} />
            </Routes>

        </>
    );
}

export default App;