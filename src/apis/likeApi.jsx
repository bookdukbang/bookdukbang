import { basicInstanceAxios } from './index';

const postLikeAxios = async (postId) => {
	try {
		const res = await basicInstanceAxios.post(`/post/${postId}/heart`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const deleteLikeAxios = async (postId) => {
	try {
		const res = await basicInstanceAxios.delete(`/post/${postId}/unheart`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export { postLikeAxios, deleteLikeAxios };
