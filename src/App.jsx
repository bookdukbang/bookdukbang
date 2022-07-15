import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MyProfile from './pages/MyProfile';
import NavigatorMenu from './components/navigator/NavigatorMenu';

function App() {
	return (
		<>
			<NavigatorMenu />
			<Routes>
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/search" exact element={<SearchPage />} />
				<Route path="/myprofile" exact element={<MyProfile />} />
			</Routes>
		</>
	);
}

export default App;
