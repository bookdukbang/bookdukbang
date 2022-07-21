import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants';
import User from '../common/user/User';
import {
	PostFormStyle,
	PostTextareaWrap,
	PostTextarea,
} from './PostForm.style';
import PostUploadImg from '../common/post/PostUploadImg';

function PostForm({ uploadImgs, setUploadImgs, setDisable }) {
	const [serverImg, setServerImg] = useState([]);

	async function imageUpload(file) {
		const formData = new FormData();
		formData.append('image', file);
		const imageUploadReqPath = '/image/uploadfile';
		try {
			const res = await fetch(SERVER_URL + imageUploadReqPath, {
				method: 'POST',
				body: formData,
			});
			const json = await res.json();

			return json;
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		console.log(serverImg);
	}, [serverImg]);

	// 이미지 서버화 네이밍 결과 배열 serverImg
	const onSubmitImg = (e) => {
		e.preventDefault();
		uploadImgs.map((img) => {
			const imgSrc = imageUpload(img);
			imgSrc
				.then((d) => SERVER_URL + '/' + d.filename)
				.then((src) => setServerImg((cur) => [...cur, src]));
		});
	};

	const onChangeTextarea = (e) => {
		if (e.target.value === '') {
			setDisable(true);
		} else {
			setDisable(false);
		}
	};

	return (
		<>
			<PostFormStyle method="POST" onSubmit={onSubmitImg} id="postUpload">
				<fieldset>
					<legend>포스팅 글쓰기</legend>
					<div>
						<User author={null} />
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
