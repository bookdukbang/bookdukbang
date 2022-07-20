import React from 'react';
import styled from 'styled-components';
import Header from '../common/header/Header';
import { ButtonStyle } from '../common//Button.style';

const PostUploadBtn = styled(ButtonStyle)`
	width: 12rem;
	padding: 1.2rem 0;
	float: right;

	&:disabled {
		opacity: 0.6;
	}

	@media ${({ theme }) => theme.size.mobile} {
		width: 8rem;
		padding: 0.5rem 0;
		font-size: 1.4rem;
	}
`;

function PostUpHeader({ isDisable }) {
	return (
		<Header>
			<PostUploadBtn type="submit" form="postUpload" disabled={isDisable}>
				업로드
			</PostUploadBtn>
		</Header>
	);
}

export default PostUpHeader;
