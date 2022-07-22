import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import JoinProfilePage from './pages/JoinProfilePage';
import SearchPage from './pages/SearchPage';
import MyProfile from './pages/MyProfile';
import ErrorPage from './pages/404Page';
import PostUploadPage from './pages/PostUploadPage';
import SplashPage from './pages/SplashPage';

import UserProfilePage from './pages/UserProfilePage';
import ChatContentPage from './pages/ChatContentPage';
import ChatListPage from './pages/ChatListPage';
import FeedPage from './pages/FeedPage';
import PostView from './pages/PostView';
import FollowerList from './pages/FollowerList';
import ProductPage from './pages/ProductPage';
import FeedNoFollowersPage from './pages/FeedNoFollowersPage';

function App() {
	const [userInfo, setUserInfo] = useState(null);
	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem('user')));
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" exact element={<SplashPage />} />
				<Route
					path="/login"
					exact
					element={
						userInfo !== null ? (
							<LoginPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/join"
					exact
					element={
						userInfo !== null ? (
							<JoinPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/join/profile"
					exact
					element={
						userInfo !== null ? (
							<JoinProfilePage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/search"
					exact
					element={
						userInfo !== null ? (
							<SearchPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/myprofile"
					exact
					element={
						userInfo !== null ? (
							<MyProfile />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/user/:id"
					exact
					element={
						userInfo !== null ? (
							<UserProfilePage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/errorPage"
					exact
					element={
						userInfo !== null ? (
							<ErrorPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/postUpload"
					exact
					element={
						userInfo !== null ? (
							<PostUploadPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/chatcontent"
					exact
					element={
						userInfo !== null ? (
							<ChatContentPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/chat"
					exact
					element={
						userInfo !== null ? (
							<ChatListPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/feed"
					exact
					element={
						userInfo !== null ? (
							<FeedPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/nofollowers"
					exact
					element={
						userInfo !== null ? (
							<FeedNoFollowersPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/post/:id"
					exact
					element={
						userInfo !== null ? (
							<PostView />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/follower/:id"
					exact
					element={
						userInfo !== null ? (
							<FollowerList />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
				<Route
					path="/product"
					exact
					element={
						userInfo !== null ? (
							<ProductPage />
						) : (
							<Navigate replace={true} to="/" />
						)
					}
				/>
			</Routes>
		</>
	);
}

export default App;
