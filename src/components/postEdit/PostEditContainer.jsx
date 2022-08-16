import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import PostForm from '../postUpload/PostForm';
import { usePostAxios } from '../../hooks/usePostAxios';

const PostEditSection = styled.section`
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

function PostEditContainer({ isDisable, setDisable }) {
	const { id } = useParams();
	const { getPost, editPost } = usePostAxios();
	const [uploadImgs, setUploadImgs] = useState([]);
	const [postInfo, setPostInfo] = useState({
		content: '',
		image: '',
	});

	useEffect(() => {
		getPost(id).then((postData) => {
			setPostInfo((cur) => ({
				...cur,
				content: postData.content,
				image: postData.image,
			}));
			setUploadImgs((cur) => [...cur, postData.image]);
		});
	}, []);

	return (
		<PostEditSection>
			<h2>포스팅 수정 페이지</h2>
			{postInfo.content !== '' && (
				<PostForm
					isDisable={isDisable}
					uploadImgs={uploadImgs}
					setUploadImgs={setUploadImgs}
					setDisable={setDisable}
					formFinishAPI={editPost}
					postInfo={postInfo}
					setPostInfo={setPostInfo}
					isImgNone={true}
				/>
			)}
			{/* {uploadImgs.length > 0 && (
				<PostViewImg
					uploadImgs={uploadImgs}
					setUploadImgs={setUploadImgs}
					isView={false}
				/>
			)} */}
		</PostEditSection>
	);
}

export default PostEditContainer;
