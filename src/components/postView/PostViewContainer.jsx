import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { usePostAxios } from '../../hooks/usePostAxios';
import FeedModal from '../common/feed/FeedModal';
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
	flex-basis: 62rem;
	flex-grow: 1;
`;

function PostViewContainer() {
	const { getPost } = usePostAxios();
	const [postContext, setPostContext] = useState(null);
	const [userInfo, setUserInfo] = useState(null);
	const [postImgs, setPostImgs] = useState(null);
	const { id } = useParams();
	const [modalInfo, setModalInfo] = useState({
		state: false,
		postUser: null,
		postId: id,
	});

	useEffect(() => {
		setUserInfo(JSON.parse(sessionStorage.getItem('user')));
	}, []);

	useEffect(() => {
		userInfo !== null && getPost(id).then((postData) => setPostContext(postData));
	}, [userInfo]);

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
							<PostCard postContext={postContext} setModalInfo={setModalInfo} />
							<CommentContainer />
						</PostContextWrap>
						{postContext.image !== '' && 'image' in postContext && (
							<PostViewImg uploadImgs={postImgs} isView={true} />
						)}
						{modalInfo.state && (
							<FeedModal
								postId={id}
								modalInfo={modalInfo}
								setModalInfo={setModalInfo}
							/>
						)}
					</>
				)}
			</PostViewSection>
		</>
	);
}
export default PostViewContainer;
