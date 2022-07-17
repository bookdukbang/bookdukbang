import React, { useState } from 'react';
import styled from 'styled-components';
import PostForm from './PostForm';
import PostViewImg from './PostViewImg';
/*
import noneUploadImg from '../../assets/upload-img.png';
import { BigBtn } from '../common/Button.style';

const PostUpImg = styled.img`
	border: 1px solid ${({ theme }) => theme.grayColor4};
	float: left;
	max-width: 75rem;
	box-sizing: border-box;
	border-radius: 0.5rem;
	display: ${({ isUploadImg }) => (isUploadImg ? 'block' : 'none')};
`;

const PostUpForm = styled.form`
	
	margin: 0 auto;
	max-width: 62rem;

	& legend {
		${({ theme }) => theme.a11yHidden()};
	}
`;

const PostUpText = styled.textarea`
	width: 100%;
	height: 50rem;
	border: none;
	background-color: ${({ theme }) => theme.bgMainColor};
	resize: none;
	border-radius: 1rem;
`;

const PostBtn = styled(BigBtn)`
	color: #444;
`;
			<PostUpImg src={noneUploadImg} alt="" isUploadImg={isUploadImg} />
			<PostUpForm action="">
				<fieldset>
					<legend>글쓰기 페이지</legend>
					<label htmlFor="chooseFile">👉 CLICK HERE! 👈</label>

					<input type="file" id="chooseFile" name="chooseFile" />
					<PostUpText name="" id="" cols="30" rows="10"></PostUpText>
					<PostBtn type="submit">업로드</PostBtn>
				</fieldset>
			</PostUpForm>
			<button type="button" onClick={() => SetIsUploadImg(true)}>
				이미지업로드
			</button>*/

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

export default function PostUpContainer() {
	const [uploadImgs, setUploadImgs] = useState([]);

	return (
		<PostUploadWrap>
			<h2>포스팅 작성 페이지</h2>
			<PostForm uploadImgs={uploadImgs} setUploadImgs={setUploadImgs} />

			{uploadImgs.length > 0 && (
				<PostViewImg
					uploadImgs={uploadImgs}
					setUploadImgs={setUploadImgs}
				/>
			)}
		</PostUploadWrap>
	);
}
