import { basicInstanceAxios } from './index';

const getFollowingAxios = async (userAccountname) => {
	try {
		const res = await basicInstanceAxios.get(`/profile/${userAccountname}/following?limit=30`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const getFollowerAxios = async (userAccountname) => {
	try {
		const res = await basicInstanceAxios.get(`/profile/${userAccountname}/follower?limit=30`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const postFollowAxios = async (userAccountname) => {
	try {
		const res = await basicInstanceAxios.post(`/profile/${userAccountname}/follow`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const deleteFollowAxios = async (userAccountname) => {
	try {
		const res = await basicInstanceAxios.delete(`/profile/${userAccountname}/unfollow`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export { getFollowingAxios, getFollowerAxios, postFollowAxios, deleteFollowAxios };
