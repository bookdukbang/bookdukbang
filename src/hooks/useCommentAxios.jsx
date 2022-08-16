import { useNavigate } from 'react-router-dom';
import {
	getCommentAxios,
	postCommentAxios,
	deleteCommentAxios,
	postReportCommentAxios,
} from '../apis/commentApi';

export const useCommentAxios = () => {
	const navigate = useNavigate();

	// 댓글 목록 얻기
	const getComments = (postId) =>
		getCommentAxios(postId).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data.comments.reverse();
			}
		});

	// 댓글 등록하기
	const postComment = (postId, commentVal) =>
		postCommentAxios(postId, commentVal).then((data) => {
			if (data.status === 404) {
				navigate('/error');
			} else {
				return data;
			}
		});

	// 댓글 삭제하기
	const deleteComment = (postId, commentId) =>
		deleteCommentAxios(postId, commentId).then((data) => {
			if (data.status === 404) {
				alert(data.message);
			} else {
				return data;
			}
		});

	// 댓글 신고하기
	const reportComment = (postId, commentId) =>
		postReportCommentAxios(postId, commentId).then((data) => {
			if (data.status === 404) {
				alert(data.message);
			} else {
				return data;
			}
		});
	return {
		getComments,
		postComment,
		deleteComment,
		reportComment,
	};
};
