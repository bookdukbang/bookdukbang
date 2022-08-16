import { useNavigate } from 'react-router-dom';
import {
	getFeedAxios,
	getMyFeedAxios,
	getPostAxios,
	postPostAxios,
	deletePostAxios,
	reportPostAxios,
	putPostAxios,
} from '../apis/postApi';

export const usePostAxios = () => {
	const navigate = useNavigate();

	//  팔로워 게시글 목록
	const getFeeds = () =>
		getFeedAxios().then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data.posts;
			}
		});

	//  나의 게시글 목록
	const getMyFeeds = (userAccountname) =>
		getMyFeedAxios(userAccountname).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data.post;
			}
		});

	// 해당 게시글 내용 얻기
	const getPost = (postId) =>
		getPostAxios(postId).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				if (!('image' in data.post)) {
					data.post['image'] = '';
				}

				return data.post;
			}
		});

	// 게시글 작성하기
	const writePost = (postInfo) =>
		postPostAxios(postInfo).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				navigate(`/post/${data.post.id}`);

				return data.post;
			}
		});

	// 게시글 수정하기
	const editPost = (postId, postInfo) =>
		putPostAxios(postId, postInfo).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				navigate(`/post/${data.post.id}`);

				return data.post;
			}
		});

	// 게시글 삭제하기
	const deletePost = (postId) =>
		deletePostAxios(postId).then((data) => {
			if (data.status === 404) {
				alert(data.message);
			} else {
				return data;
			}
		});

	// 게시글 신고하기
	const reportPost = (postId) =>
		reportPostAxios(postId).then((data) => {
			if (data.status === 404) {
				alert(data.message);
			} else {
				return data;
			}
		});

	return {
		getFeeds,
		getMyFeeds,
		getPost,
		writePost,
		editPost,
		deletePost,
		reportPost,
	};
};
