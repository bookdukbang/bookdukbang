import React, { useState } from 'react';
import styled from 'styled-components';
import PostForm from './PostForm';
import PostViewImg from '../common/post/PostViewImg';

const PostUploadSection = styled.section`
	display: flex;
	flex-direction: row-reverse;
	min-height: 48.5rem;
	gap: 2.5rem;
	& h2 {
		${({ theme }) => theme.a11yHidden()};
	}
	@media ${({ theme }) => theme.size.tablet} {
		flex-direction: column-reverse;
		gap: 0rem;
	}
`;

function PostUpContainer({ isDisable, setDisable }) {
	const [uploadImgs, setUploadImgs] = useState([]);

	return (
		<PostUploadSection>
			<h2>포스팅 작성 페이지</h2>
			<PostForm
				isDisable={isDisable}
				uploadImgs={uploadImgs}
				setUploadImgs={setUploadImgs}
				setDisable={setDisable}
			/>

			{uploadImgs.length > 0 && (
				<PostViewImg
					uploadImgs={uploadImgs}
					setUploadImgs={setUploadImgs}
					isView={false}
				/>
			)}
		</PostUploadSection>
	);
}

export default PostUpContainer;
