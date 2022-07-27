import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SERVER_URL } from '../../constants';
import PostViewImg from '../common/post/PostViewImg';
import CommentContainer from './comment/CommentContainer';
import PostCard from './PostCard';

const PostViewSection = styled.section`
	min-height: 48.5rem;
	display: flex;
	flex-direction: row-reverse;
	gap: 2.5rem;
	& h2 {
		${({ theme }) => theme.a11yHidden()};
	}
	@media ${({ theme }) => theme.size.tablet} {
		flex-direction: column-reverse;
		gap: 0rem;
	}
`;

const PostContextWrap = styled.div`
	flex-grow: 1;
`;

function PostViewContainer() {
	const navigate = useNavigate();
	const [postContext, setPostContext] = useState(null);
	const [userInfo, setUserInfo] = useState(null);
	const [postImgs, setPostImgs] = useState(null);
	const { id } = useParams();
	const postId = id;

	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem('user')));
	}, []);

	useEffect(() => {
		userInfo !== null && postViewAPI();
	}, [userInfo]);

	async function postViewAPI() {
		const reqPath = `/post/${postId}`;

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

			setPostContext(json.post);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		if (postContext !== null) {
			setPostImgs(postContext.image.split(','));
		}
	}, [postContext]);

	return (
		<>
			<PostViewSection>
				<h2>포스팅 상세 페이지</h2>
				{userInfo !== null && postContext && postImgs && (
					<>
						<PostContextWrap>
							<PostCard
								postContext={postContext}
								postImgs={postImgs}
							/>
							<CommentContainer
								userInfo={userInfo}
								postId={postId}
							/>
						</PostContextWrap>
						{postContext.image !== '' && (
							<PostViewImg uploadImgs={postImgs} isView={true} />
						)}
					</>
				)}
			</PostViewSection>
		</>
	);
}
export default PostViewContainer;
