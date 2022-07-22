import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL, USER_TOKEN } from '../../constants';
import User from '../common/user/User';
import {
	PostFormStyle,
	PostTextareaWrap,
	PostTextarea,
} from './PostForm.style';
import PostUploadImg from '../common/post/PostUploadImg';

function PostForm({ uploadImgs, setUploadImgs, setDisable }) {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState(null);
	const [postInfo, setPostInfo] = useState({
		content: '',
		image: '',
	});

	useEffect(() => {
		setPostInfo((cur) => ({
			...cur,
			image: '',
		}));
		imgServerAPI(uploadImgs).then((d) => {
			d.map((file) => {
				const serverUrl = SERVER_URL + '/' + file.filename;
				setPostInfo((cur) => {
					if (cur.image === '') {
						return {
							...cur,
							image: serverUrl,
						};
					} else {
						return {
							...cur,
							image: `${cur.image},${serverUrl}`,
						};
					}
				});
			});
		});
	}, [uploadImgs]);

	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem('user')));
	}, []);

	// 서버로 이미지 보내기
	async function imgServerAPI(files) {
		const formData = new FormData();
		files.map((file) => formData.append('image', file));
		const reqPath = '/image/uploadfiles';
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				body: formData,
			});
			const json = await res.json();

			return json;
		} catch (err) {
			console.error(err.message);
		}
	}

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
					Authorization: `Bearer ${USER_TOKEN}`,
					'Content-type': 'application/json',
				},
				body: JSON.stringify(postData),
			});
			const json = await res.json();
			return json;
		} catch (err) {
			console.error(err.message);
		}
	}

	// 서버에 입력 form 제출
	const onSubmitForm = (e) => {
		e.preventDefault();
		postUploadAPI().then((d) => {
			console.log(d);
			navigate(`/post${d.post.id}`);
		});
	};

	const onChangeTextarea = (e) => {
		if (e.target.value === '') {
			setDisable(true);
		} else {
			setDisable(false);
		}
		setPostInfo((cur) => ({ ...cur, content: e.target.value }));
	};

	return (
		<>
			<PostFormStyle
				method="POST"
				onSubmit={onSubmitForm}
				id="postUpload"
			>
				<fieldset>
					<legend>포스팅 글쓰기</legend>
					<div>
						<User author={userInfo} />
					</div>
					<PostTextareaWrap>
						<label htmlFor="postText">포스팅 글 입력</label>
						<PostTextarea
							id="postText"
							name="postText"
							placeholder="게시글 입력하기..."
							onChange={onChangeTextarea}
						></PostTextarea>
					</PostTextareaWrap>
					<PostUploadImg
						uploadImgs={uploadImgs}
						setUploadImgs={setUploadImgs}
						isMulty={true}
					/>
				</fieldset>
			</PostFormStyle>
		</>
	);
}
export default PostForm;
