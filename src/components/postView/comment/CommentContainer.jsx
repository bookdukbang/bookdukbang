import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { SERVER_URL, USER_TOKEN } from '../../../constants';
import Comment from './Comment';
import CommentForm from './CommentForm';

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

function CommentContainer({ postId }) {
	const [postComments, setPostComments] = useState(null);
	const [isCommentUpload, setIsCommentUpload] = useState(false);

	useEffect(() => {
		if (isCommentUpload) {
			commentAPI();
			setIsCommentUpload(false);
		}
	}, [isCommentUpload]);

	async function commentAPI() {
		const reqPath = `/post/${postId}/comments`;
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${USER_TOKEN}`,
					'Content-type': 'application/json',
				},
			});

			const json = await res.json();
			setPostComments(json.comments);
		} catch (err) {
			if (err.state === 404) {
				alert(err.message);
			}
			console.error(err.message);
		}
	}

	useEffect(() => {
		commentAPI();
	}, []);

	return (
		<CommentContainerStyle>
			<ul>
				{postComments !== '' &&
					postComments !== null &&
					postComments
						.reverse()
						.map((item) => (
							<Comment key={item.id} commentInfo={item} />
						))}
			</ul>
			{postComments !== null && (
				<CommentForm
					postId={postId}
					setIsCommentUpload={setIsCommentUpload}
				/>
			)}
		</CommentContainerStyle>
	);
}
export default CommentContainer;
