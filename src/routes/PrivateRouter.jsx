import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRouter({ isShowFeed, element }) {
	const isLogin = sessionStorage.getItem('user') === null ? false : true;

	if (isShowFeed) {
		return isLogin ? <Navigate to="/feed" /> : element;
	} else {
		return isLogin ? element : <Navigate to="/" />;
	}
}

export default PrivateRouter;
