import React from 'react';
import styled from 'styled-components';
import Wrap from '../components/common/Wrap';
import PostUpContainer from '../components/postUpload/PostUpContainer';
import PostUpHeader from '../components/postUpload/PostUpHeader';

const PostUpWrap = styled(Wrap)`
	margin-top: 3rem;

	&::after {
		display: block;
		clear: both;
		content: '';
	}
	@media ${({ theme }) => theme.size.tablet} {
		margin-bottom: 3rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		margin: 1rem auto 9rem;
	}
`;

function PostUploadPage() {
	return (
		<>
			<PostUpHeader />
			<PostUpWrap>
				<PostUpContainer />
			</PostUpWrap>
		</>
	);
}

export default PostUploadPage;
