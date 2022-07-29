import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
// import PostViewImg from '../common/post/PostViewImg';
import PostForm from '../postUpload/PostForm';
import { SERVER_URL } from '../../constants';

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
//
function PostEditContainer({ isDisable, setDisable }) {
	const { id } = useParams();
	const token = JSON.parse(localStorage.getItem('user')).token;
	const navigate = useNavigate();
	const [uploadImgs, setUploadImgs] = useState([]);
	const [postInfo, setPostInfo] = useState({
		content: '',
		image: '',
	});

	useEffect(() => {
		callPostAPI();
	}, []);

	// 해당 게시물 내용 받아오기
	async function callPostAPI() {
		const reqPath = `/post/${id}`;
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const json = await res.json();

			if (json.status === 404) {
				throw navigate('/errorPage');
			}

			setPostInfo((cur) => ({
				...cur,
				content: json.post.content,
				image: json.post.image,
			}));
			setUploadImgs((cur) => [...cur, json.post.image]);
			return json;
		} catch (err) {
			console.error(err);
		}
	}

	// 서버로 수정한 form 보내기
	async function postEditAPI() {
		const reqPath = `/post/${id}`;
		const postData = {
			post: {
				...postInfo,
			},
		};
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'PUT',
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
		<PostEditSection>
			<h2>포스팅 수정 페이지</h2>
			{postInfo.content !== '' && (
				<PostForm
					isDisable={isDisable}
					uploadImgs={uploadImgs}
					setUploadImgs={setUploadImgs}
					setDisable={setDisable}
					formFinishAPI={postEditAPI}
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
