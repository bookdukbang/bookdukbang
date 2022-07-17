import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import { ButtonStyle } from '../common//Button.style';

const PostUploadBtn = styled(ButtonStyle)`
	width: 12rem;
	padding: 1.2rem 0;
	float: right;

	&:disabled {
		opacity: 0.6;
	}
`;

function PostUpHeader() {
	return (
		<Header>
			<PostUploadBtn type="submit" form="postUpload" disabled>
				업로드
			</PostUploadBtn>
		</Header>
	);
}

export default PostUpHeader;
