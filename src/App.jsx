import React from 'react';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MyProfile from './pages/MyProfile';
import NavigatorMenu from './components/navigator/NavigatorMenu';
import ErrorPage from './pages/404Page';
import PostUploadPage from './pages/PostUploadPage';
import PostForm from './components/postUpload/PostForm';

function App() {
	return (
		<>
			<NavigatorMenu />
			<Routes>
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/search" exact element={<SearchPage />} />
				<Route path="/myprofile" exact element={<MyProfile />} />
				<Route path="/errorPage" exact element={<ErrorPage />} />
				<Route path="/postUpload" exact element={<PostUploadPage />} />
				<Route path="/p" exact element={<PostForm />} />
			</Routes>
		</>
	);
}

export default App;
