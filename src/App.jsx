import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MyProfile from './pages/MyProfile';
import ErrorPage from './pages/404Page';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/search" exact element={<SearchPage />} />
				<Route path="/myprofile" exact element={<MyProfile />} />
				<Route path="/errorPage" exact element={<ErrorPage />} />
			</Routes>
		</>
	);
}

export default App;
