import { basicInstanceAxios } from './index';

const getFeedAxios = async () => {
	try {
		const res = await basicInstanceAxios.get(`/post/feed`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const getMyFeedAxios = async (userAccountname) => {
	try {
		const res = await basicInstanceAxios.get(`/post/${userAccountname}/userpost`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const getPostAxios = async (postId) => {
	try {
		const res = await basicInstanceAxios.get(`/post/${postId}`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const postPostAxios = async (postInfo) => {
	try {
		const res = await basicInstanceAxios.post(`/post`, {
			post: {
				...postInfo,
			},
		});
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const putPostAxios = async (postId, postInfo) => {
	try {
		const res = await basicInstanceAxios.put(`/post/${postId}`, {
			post: {
				...postInfo,
			},
		});
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
const deletePostAxios = async (postId) => {
	try {
		const res = await basicInstanceAxios.delete(`/post/${postId}`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const reportPostAxios = async (postId) => {
	try {
		const res = await basicInstanceAxios.post(`/post/${postId}/report`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export {
	getFeedAxios,
	getMyFeedAxios,
	getPostAxios,
	postPostAxios,
	putPostAxios,
	deletePostAxios,
	reportPostAxios,
};
