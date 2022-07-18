import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MyProfile from './pages/MyProfile';
import NavigatorMenu from './components/navigator/NavigatorMenu';
import ErrorPage from './pages/404Page';
import Splash from './pages/Splash';
import SplashLogin from './pages/SplashLogin';
import ChatContentPage from './pages/ChatContentPage';
import ChatListPage from './pages/ChatListPage';

function App() {
	return (
		<>
			<NavigatorMenu />
			<Routes>
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/search" exact element={<SearchPage />} />
				<Route path="/myprofile" exact element={<MyProfile />} />
				<Route path="/errorPage" exact element={<ErrorPage />} />
				<Route path="/splash" exact element={<Splash />} />
				<Route path="/splashLogin" exact element={<SplashLogin />} />
				<Route
					path="/chatcontent"
					exact
					element={<ChatContentPage />}
				/>
				<Route path="/chat" exact element={<ChatListPage />} />
			</Routes>
		</>
	);
}

export default App;
