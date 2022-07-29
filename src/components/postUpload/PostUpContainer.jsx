import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostForm from './PostForm';
import PostViewImg from '../common/post/PostViewImg';
import { SERVER_URL } from '../../constants';

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
	const token = JSON.parse(localStorage.getItem('user')).token;
	const navigate = useNavigate();
	const [uploadImgs, setUploadImgs] = useState([]);
	const [postInfo, setPostInfo] = useState({
		content: '',
		image: '',
	});

	// 서버로 form 보내기
	async function postUploadAPI() {
		const reqPath = '/post';
		const postData = {
			post: {
				...postInfo,
			},
		};
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
				body: JSON.stringify(postData),
			});
			const json = await res.json();

			if (json.status === 404) {
				throw navigate('/errorPage');
			}
			navigate(`/post/${json.post.id}`);
			return json;
		} catch (err) {
			console.error(err.message);
		}
	}

	return (
		<PostUploadSection>
			<h2>포스팅 작성 페이지</h2>
			<PostForm
				isDisable={isDisable}
				uploadImgs={uploadImgs}
				setUploadImgs={setUploadImgs}
				setDisable={setDisable}
				formFinishAPI={postUploadAPI}
				postInfo={postInfo}
				setPostInfo={setPostInfo}
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
