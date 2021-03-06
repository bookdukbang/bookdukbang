import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyles from './style/global';

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
import PostEditPage from './pages/PostEditPage';
import ProductEditPage from './pages/ProductEditPage';
import DarkModeBtn from './components/darkmode/DarkModeBtn';
import { ThemeModeContext } from './context/ThemeModeContext';

function App() {
	const LocalTheme = JSON.parse(localStorage.getItem('mode')) || 'light';
	const [mode, setMode] = useState(LocalTheme);

	return (
		<>
			<ThemeModeContext.Provider value={{ mode, setMode }}>
				<ThemeProvider theme={theme[mode]}>
					<GlobalStyles />
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
						<Route
							path="/myprofile"
							exact
							element={<MyProfilePage />}
						/>
						<Route
							path="/user/:id"
							exact
							element={<UserProfilePage />}
						/>
						<Route
							path="/errorPage"
							exact
							element={<ErrorPage />}
						/>
						<Route
							path="/postUpload"
							exact
							element={<PostUploadPage />}
						/>
						<Route
							path="/chatcontent"
							exact
							element={<ChatContentPage />}
						/>
						<Route path="/chat" exact element={<ChatListPage />} />
						<Route path="/feed" exact element={<FeedPage />} />
						<Route path="/post/:id" exact element={<PostView />} />
						<Route
							path="/post/edit/:id"
							exact
							element={<PostEditPage />}
						/>
						<Route
							path="/follower/:id"
							exact
							element={<FollowerList />}
						/>
						<Route
							path="/following/:id"
							exact
							element={<FollowingList />}
						/>
						<Route
							path="/product"
							exact
							element={<ProductPage />}
						/>
						<Route
							path="/product/edit/:id"
							exact
							element={<ProductEditPage />}
						/>
						<Route
							path="/profileEdit"
							exact
							element={<ProfileEditPage />}
						/>
					</Routes>
					<DarkModeBtn isMain={true} />
				</ThemeProvider>
			</ThemeModeContext.Provider>
		</>
	);
}

export default App;
