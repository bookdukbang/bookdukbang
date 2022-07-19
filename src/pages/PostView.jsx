import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/FeedHeader';
import Wrap from '../components/common/Wrap';
import PostViewContainer from '../components/postView/PostViewContainer';

const PostViewWrap = styled(Wrap)`
	margin-top: 3rem;
	@media ${({ theme }) => theme.size.tablet} {
		margin-bottom: 3rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		margin: 1rem auto 9rem;
	}
`;

export default function PostView() {
	return (
		<>
			<FeedHeader />
			<PostViewWrap>
				<PostViewContainer />
			</PostViewWrap>
		</>
	);
}
