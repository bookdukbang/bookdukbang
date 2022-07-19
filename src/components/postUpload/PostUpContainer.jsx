import React, { useState } from 'react';
import styled from 'styled-components';
import PostForm from './PostForm';
import PostViewImg from './PostViewImg';

const PostUploadWrap = styled.section`
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

function PostUpContainer({ setDisable }) {
	const [uploadImgs, setUploadImgs] = useState([]);

	return (
		<PostUploadWrap>
			<h2>포스팅 작성 페이지</h2>
			<PostForm
				uploadImgs={uploadImgs}
				setUploadImgs={setUploadImgs}
				setDisable={setDisable}
			/>

			{uploadImgs.length > 0 && (
				<PostViewImg
					uploadImgs={uploadImgs}
					setUploadImgs={setUploadImgs}
				/>
			)}
		</PostUploadWrap>
	);
}

export default PostUpContainer;
