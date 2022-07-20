import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { SERVER_URL, USER_TOKEN, POST_ID } from '../../../constants';
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

function CommentContainer() {
	const [postComments, setPostComments] = useState(null);
	async function commentAPI() {
		const reqPath = `/post/${POST_ID}/comments`;

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
				{postComments !== null &&
					postComments
						.reverse()
						.map((item) => (
							<Comment key={item.id} commentInfo={item} />
						))}
			</ul>
			{postComments !== null && <CommentForm />}
		</CommentContainerStyle>
	);
}
export default CommentContainer;
