import React, { useState } from 'react';
import styled from 'styled-components';
import Wrap from '../components/common/Wrap';
import PostUpContainer from '../components/postUpload/PostUpContainer';
import PostHeader from '../components/common/post/PostHeader';

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
	const [isDisable, setDisable] = useState(true);

	return (
		<>
			<PostHeader isDisable={isDisable} btnTxt={'업로드'} />
			<PostUpWrap>
				<PostUpContainer
					isDisable={isDisable}
					setDisable={setDisable}
				/>
			</PostUpWrap>
		</>
	);
}

export default PostUploadPage;
