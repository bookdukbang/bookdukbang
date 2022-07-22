import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import JoinProfilePage from './pages/JoinProfilePage';
import SearchPage from './pages/SearchPage';
import MyProfile from './pages/MyProfile';
import ErrorPage from './pages/404Page';
import PostUploadPage from './pages/PostUploadPage';
import Splash from './pages/Splash';
import SplashLogin from './pages/SplashLogin';
import UserProfilePage from './pages/UserProfilePage';
import ChatContentPage from './pages/ChatContentPage';
import ChatListPage from './pages/ChatListPage';
import FeedPage from './pages/FeedPage';
import PostView from './pages/PostView';
import FollowerList from './pages/FollowerList';
import ProductPage from './pages/ProductPage';
import FeedNoFollowersPage from './pages/FeedNoFollowersPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/join" exact element={<JoinPage />} />
				<Route
					path="/join/profile"
					exact
					element={<JoinProfilePage />}
				/>
				<Route path="/search" exact element={<SearchPage />} />
				<Route path="/myprofile" exact element={<MyProfile />} />
				<Route
					path="/userprofile"
					exact
					element={<UserProfilePage />}
				/>
				<Route path="/errorPage" exact element={<ErrorPage />} />
				<Route path="/postUpload" exact element={<PostUploadPage />} />
				<Route path="/" exact element={<Splash />} />
				<Route path="/splashLogin" exact element={<SplashLogin />} />
				<Route
					path="/chatcontent"
					exact
					element={<ChatContentPage />}
				/>
				<Route path="/chat" exact element={<ChatListPage />} />
				<Route path="/feed" exact element={<FeedPage />} />
				<Route
					path="/nofollowers"
					exact
					element={<FeedNoFollowersPage />}
				/>
				<Route path="/post" exact element={<PostView />} />
				<Route path="/followerlist" exact element={<FollowerList />} />
				<Route path="/product" exact element={<ProductPage />} />
			</Routes>
		</>
	);
}

export default App;
