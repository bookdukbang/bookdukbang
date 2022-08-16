import { useNavigate } from 'react-router-dom';
import {
	deleteFollowAxios,
	getFollowerAxios,
	getFollowingAxios,
	postFollowAxios,
} from '../apis/followApi';

export const useFollowAxios = () => {
	const navigate = useNavigate();

	//  Follwer 리스트 얻기
	const getFollowerList = (userAccountname) =>
		getFollowerAxios(userAccountname).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data;
			}
		});

	//  Follwing 리스트 얻기
	const getFollowingList = (userAccountname) =>
		getFollowingAxios(userAccountname).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data;
			}
		});

	//  유저 follow 하기
	const followUser = (userAccountname) =>
		postFollowAxios(userAccountname).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data;
			}
		});

	//  유저 unfollow 하기
	const unfollowUser = (userAccountname) =>
		deleteFollowAxios(userAccountname).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data;
			}
		});

	return { getFollowerList, getFollowingList, followUser, unfollowUser };
};
