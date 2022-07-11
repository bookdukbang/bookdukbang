import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

// const Wrapper = styled.div`
// 	height: 100%;
// 	width: 100%;
// 	background-color: #f5f5f5;
// `;

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/search" exact element={<SearchPage />} />
			</Routes>
		</>
	);
}

export default App;
