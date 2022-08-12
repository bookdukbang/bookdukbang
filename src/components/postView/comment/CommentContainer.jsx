import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAxios } from '../../../hooks/useAxios';
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

function CommentContainer() {
	const { id } = useParams();
	const { getComments } = useAxios();
	const [postComments, setPostComments] = useState(null);
	const [isCommentUpload, setIsCommentUpload] = useState(false);
	const [modalInfo, setModalInfo] = useState({
		state: false,
		commentId: null,
		commentUser: null,
	});

	useEffect(() => {
		getComments(id).then((commentData) => setPostComments(commentData));
	}, []);

	useEffect(() => {
		if (isCommentUpload) {
			getComments(id).then((commentData) => setPostComments(commentData));
			setIsCommentUpload(false);
		}
	}, [isCommentUpload]);

	return (
		<CommentContainerStyle>
			<ul>
				{postComments !== '' &&
					postComments !== null &&
					postComments.map((item) => (
						<Comment key={item.id} commentInfo={item} setModalInfo={setModalInfo} />
					))}
			</ul>
			{postComments !== null && <CommentForm setIsCommentUpload={setIsCommentUpload} />}
			{modalInfo.state && (
				<CommetModal
					modalInfo={modalInfo}
					setModalInfo={setModalInfo}
					setIsCommentUpload={setIsCommentUpload}
				/>
			)}
		</CommentContainerStyle>
	);
}
export default CommentContainer;
