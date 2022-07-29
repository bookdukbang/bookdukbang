import React, { useState } from 'react';
import styled from 'styled-components';
import Wrap from '../components/common/Wrap';
import PostEditContainer from '../components/postEdit/PostEditContainer';
import PostUpHeader from '../components/common/post/PostHeader';

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

function PostEditPage() {
	const [isDisable, setDisable] = useState(true);
	return (
		<>
			<PostUpHeader isDisable={isDisable} btnTxt={'수정'} />
			<PostUpWrap>
				<PostEditContainer
					isDisable={isDisable}
					setDisable={setDisable}
				/>
			</PostUpWrap>
		</>
	);
}

export default PostEditPage;
