import React, { useState } from 'react';
import PostUploadImg from '../common/post/PostUploadImg';
import { SERVER_URL } from '../../constants';
import { InputStyle, LabelStyle } from '../common/Input.style';
import {
	ProductBtn,
	ProductFormStyle,
	ProductImgWrap,
} from './ProductForm.style';

function ProductForm() {
	const [serverImg, setServerImg] = useState([]);
	const [uploadImgs, setUploadImgs] = useState([]);

	console.log(setServerImg);

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

	return (
		<ProductFormStyle onSubmit={onSubmitImg}>
			<fieldset>
				<legend>상품등록 양식</legend>
				<ProductImgWrap>
					<PostUploadImg
						uploadImgs={uploadImgs}
						serverImg={serverImg}
						setUploadImgs={setUploadImgs}
					/>
				</ProductImgWrap>
				<LabelStyle htmlFor="productName">상품명</LabelStyle>
				<InputStyle
					type="text"
					name="productName"
					id="productName"
					placeholder="2~15자 이내여야 합니다."
					required
				/>
				<LabelStyle htmlFor="productPrice">가격</LabelStyle>
				<InputStyle
					type="number"
					name="productPrice"
					id="productPrice"
					placeholder="숫자만 입력 가능합니다."
					required
					min="0"
				/>
				<LabelStyle htmlFor="ProductSite">판매 링크</LabelStyle>
				<InputStyle
					type="url"
					name="ProductSite"
					id="ProductSite"
					placeholder="url을 입력해 주세요."
					required
				/>
				<ProductBtn type="submit" disabled={true}>
					전송
				</ProductBtn>
			</fieldset>
		</ProductFormStyle>
	);
}
export default ProductForm;
