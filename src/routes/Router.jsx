import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import JoinPage from '../pages/JoinPage';
import JoinProfilePage from '../pages/JoinProfilePage';
import SearchPage from '../pages/SearchPage';
import MyProfilePage from '../pages/MyProfilePage';
import ErrorPage from '../pages/404Page';
import PostUploadPage from '../pages/PostUploadPage';
import SplashPage from '../pages/SplashPage';
import UserProfilePage from '../pages/UserProfilePage';
import ChatContentPage from '../pages/ChatContentPage';
import ChatListPage from '../pages/ChatListPage';
import FeedPage from '../pages/FeedPage';
import PostView from '../pages/PostView';
import FollowerList from '../pages/FollowerListPage';
import FollowingList from '../pages/FollowingListPage';
import ProductUploadPage from '../pages/ProductUploadPage';
import ProfileEditPage from '../pages/ProfileEditPage';
import PostEditPage from '../pages/PostEditPage';
import ProductEditPage from '../pages/ProductEditPage';
import PrivateRouter from './PrivateRouter';

export default function Router() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					exact
					element={<PrivateRouter isShowFeed element={<SplashPage />} />}
				/>
				<Route
					path="/login"
					exact
					element={<PrivateRouter isShowFeed element={<LoginPage />} />}
				/>
				<Route
					path="/join"
					exact
					element={<PrivateRouter isShowFeed element={<JoinPage />} />}
				/>
				<Route
					path="/join/profile"
					exact
					element={<PrivateRouter isShowFeed element={<JoinProfilePage />} />}
				/>
				<Route path="/search" exact element={<PrivateRouter element={<SearchPage />} />} />
				<Route path="/my" exact element={<PrivateRouter element={<MyProfilePage />} />} />
				<Route
					path="/user/:id"
					exact
					element={<PrivateRouter element={<UserProfilePage />} />}
				/>
				<Route
					path="/post/upload"
					exact
					element={<PrivateRouter element={<PostUploadPage />} />}
				/>
				<Route
					path="/chat/:id"
					exact
					element={<PrivateRouter element={<ChatContentPage />} />}
				/>
				<Route path="/chat" exact element={<PrivateRouter element={<ChatListPage />} />} />
				<Route path="/feed" exact element={<PrivateRouter element={<FeedPage />} />} />
				<Route path="/post/:id" exact element={<PrivateRouter element={<PostView />} />} />
				<Route
					path="/post/edit/:id"
					exact
					element={<PrivateRouter element={<PostEditPage />} />}
				/>
				<Route
					path="/follower/:id"
					exact
					element={<PrivateRouter element={<FollowerList />} />}
				/>
				<Route
					path="/following/:id"
					exact
					element={<PrivateRouter element={<FollowingList />} />}
				/>
				<Route
					path="/product/upload"
					exact
					element={<PrivateRouter element={<ProductUploadPage />} />}
				/>
				<Route
					path="/product/edit/:id"
					exact
					element={<PrivateRouter element={<ProductEditPage />} />}
				/>
				<Route
					path="/my/edit"
					exact
					element={<PrivateRouter element={<ProfileEditPage />} />}
				/>

				<Route path="/error" exact element={<ErrorPage />} />
			</Routes>
		</>
	);
}
