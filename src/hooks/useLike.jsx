import { deleteLikeAxios, postLikeAxios } from '../apis/likeApi';

export const useLike = () => {
	const likepost = (postId) =>
		postLikeAxios(postId).then((data) => {
			if (data.status === 404) {
				alert(data.message);
			} else {
				return data.post;
			}
		});

	const dislikepost = (postId) =>
		deleteLikeAxios(postId).then((data) => {
			if (data.status === 404) {
				alert(data.message);
			} else {
				return data.post;
			}
		});

	return { likepost, dislikepost };
};
