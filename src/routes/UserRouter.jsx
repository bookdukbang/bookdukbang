import React from 'react';
import { useParams } from 'react-router-dom';
import MyProfilePage from '../pages/MyProfilePage';
import UserProfilePage from '../pages/UserProfilePage';

function UserRouter() {
	const { id } = useParams();
	const loginUserAccountname = JSON.parse(sessionStorage.getItem('user')).accountname;

	if (loginUserAccountname === id) {
		return <MyProfilePage />;
	} else {
		return <UserProfilePage />;
	}
}

export default UserRouter;
