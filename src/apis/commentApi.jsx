import { basicInstanceAxios } from './index';

const getCommentAxios = async (postId) => {
	try {
		const res = await basicInstanceAxios.get(`/post/${postId}/comments`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const postCommentAxios = async (postId, commentVal) => {
	try {
		const res = await basicInstanceAxios.post(`/post/${postId}/comments`, {
			comment: {
				content: commentVal,
			},
		});
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const deleteCommentAxios = async (postId, commentId) => {
	try {
		const res = await basicInstanceAxios.delete(`/post/${postId}/comments/${commentId}`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

const postReportCommentAxios = async (postId, commentId) => {
	try {
		const res = await basicInstanceAxios.post(`/post/${postId}/comments/${commentId}/report`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};
export { getCommentAxios, postCommentAxios, deleteCommentAxios, postReportCommentAxios };
