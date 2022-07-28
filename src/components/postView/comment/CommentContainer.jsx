import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SERVER_URL } from '../../../constants';
import Comment from './Comment';
import CommentForm from './CommentForm';
import CommetModal from './CommetModal';

const CommentContainerStyle = styled.div`
	margin-top: 1rem;
	padding: 3rem 3rem 0;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	overflow: hidden;

	@media ${({ theme }) => theme.size.mobile} {
		padding: 1rem;
	}
`;

function CommentContainer({ postId, userInfo }) {
	const navigate = useNavigate();
	const [postComments, setPostComments] = useState(null);
	const [isCommentUpload, setIsCommentUpload] = useState(false);
	const [modalInfo, setModalInfo] = useState({
		state: false,
		commentId: null,
		commentUser: null,
	});

	useEffect(() => {
		commentAPI();
	}, []);

	useEffect(() => {
		if (isCommentUpload) {
			commentAPI();
			setIsCommentUpload(false);
		}
	}, [isCommentUpload]);

	// 해당 게시글의 댓글 불러오기
	async function commentAPI() {
		const reqPath = `/post/${postId}/comments`;
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
					'Content-type': 'application/json',
				},
			});

			const json = await res.json();

			if (json.status === 404) {
				throw navigate('/errorPage');
			}

			setPostComments(json.comments.reverse());
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<CommentContainerStyle>
			<ul>
				{postComments !== '' &&
					postComments !== null &&
					postComments.map((item) => (
						<Comment
							key={item.id}
							commentInfo={item}
							setModalInfo={setModalInfo}
						/>
					))}
			</ul>
			{postComments !== null && (
				<CommentForm
					postId={postId}
					setIsCommentUpload={setIsCommentUpload}
					userInfo={userInfo}
				/>
			)}
			{modalInfo.state && (
				<CommetModal
					postId={postId}
					userInfo={userInfo}
					modalInfo={modalInfo}
					setModalInfo={setModalInfo}
					setIsCommentUpload={setIsCommentUpload}
				/>
			)}
		</CommentContainerStyle>
	);
}
export default CommentContainer;
