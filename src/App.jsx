import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import JoinProfilePage from './pages/JoinProfilePage';
import SearchPage from './pages/SearchPage';
import MyProfilePage from './pages/MyProfilePage';
import ErrorPage from './pages/404Page';
import PostUploadPage from './pages/PostUploadPage';
import SplashPage from './pages/SplashPage';

import UserProfilePage from './pages/UserProfilePage';
import ChatContentPage from './pages/ChatContentPage';
import ChatListPage from './pages/ChatListPage';
import FeedPage from './pages/FeedPage';
import PostView from './pages/PostView';
import FollowerList from './pages/FollowerListPage';
import FollowingList from './pages/FollowingListPage';
import ProductPage from './pages/ProductPage';
import ProfileEditPage from './pages/ProfileEditPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" exact element={<SplashPage />} />
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/join" exact element={<JoinPage />} />
				<Route
					path="/join/profile"
					exact
					element={<JoinProfilePage />}
				/>
				<Route path="/search" exact element={<SearchPage />} />
				<Route path="/myprofile" exact element={<MyProfilePage />} />
				<Route path="/user/:id" exact element={<UserProfilePage />} />
				<Route path="/errorPage" exact element={<ErrorPage />} />
				<Route path="/postUpload" exact element={<PostUploadPage />} />
				<Route
					path="/chatcontent"
					exact
					element={<ChatContentPage />}
				/>
				<Route path="/chat" exact element={<ChatListPage />} />
				<Route path="/feed" exact element={<FeedPage />} />
				<Route path="/post/:id" exact element={<PostView />} />
				<Route path="/follower/:id" exact element={<FollowerList />} />
				<Route
					path="/following/:id"
					exact
					element={<FollowingList />}
				/>
				<Route path="/product" exact element={<ProductPage />} />
				<Route
					path="/profileEdit"
					exact
					element={<ProfileEditPage />}
				/>
			</Routes>
		</>
	);
}

export default App;
