import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoneProductImg from '../../assets/none-product.png';
import PostUploadImg from '../common/post/PostUploadImg';
import { SERVER_URL } from '../../constants';
import { ProductBtn, ProductFormStyle, ProductImgWrap, ProductImg } from './ProductForm.style';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductLink from './ProductLink';
import { ErrorText } from '../common/Input.style';
import styled from 'styled-components';

const ImgErrorText = styled(ErrorText)`
	margin-bottom: 3rem;
`;

function ProductForm({ productInfo, setProductInfo, errorInfo, setErrorInfo, formAPI, isEdit }) {
	const navigate = useNavigate();
	const [uploadImgs, setUploadImgs] = useState([]);
	const [isDisable, setIsDisable] = useState(true);

	useEffect(() => {
		if (productInfo.itemImage === '') {
			setErrorInfo((cur) => ({
				...cur,
				itemImage: { state: true },
			}));
		} else {
			setErrorInfo((cur) => ({
				...cur,
				itemImage: { state: false },
			}));
		}
	}, [productInfo]);

	// 서버로 이미지 보내기
	async function imgServerAPI(file) {
		const formData = new FormData();
		formData.append('image', file);
		const reqPath = '/image/uploadfile';
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				body: formData,
			});
			const json = await res.json();
			if (json.status === 404) {
				throw navigate('/error');
			}
			return json;
		} catch (err) {
			console.error(err);
		}
	}

	// error 상태에 따라 버튼 활성화
	useEffect(() => {
		setIsDisable(
			errorInfo.itemName.state ||
				errorInfo.price.state ||
				errorInfo.link.state ||
				errorInfo.itemImage.state,
		);
	}, [errorInfo]);

	// 이미지 파일이 업로드 되면 이미지 서버주소 받기
	useEffect(() => {
		if (uploadImgs.length !== 0) {
			window.URL.revokeObjectURL(URL.createObjectURL(uploadImgs));
			imgServerAPI(uploadImgs)
				.then((d) => SERVER_URL + '/' + d.filename)
				.then((src) => setProductInfo((cur) => ({ ...cur, itemImage: src })));
		}
	}, [uploadImgs]);

	// 서버에 입력 form 제출
	const onSubmitImg = (e) => {
		e.preventDefault();
		if (!isDisable) {
			formAPI();
		}
	};

	return (
		<ProductFormStyle onSubmit={onSubmitImg}>
			<fieldset>
				<legend>상품등록 양식</legend>
				<ProductImgWrap>
					{uploadImgs.length !== 0 || isEdit ? (
						<ProductImg src={productInfo.itemImage} alt={productInfo.itemName} />
					) : (
						<ProductImg src={NoneProductImg} alt="상품 이미지" />
					)}
					<PostUploadImg
						uploadImgs={uploadImgs}
						setUploadImgs={setUploadImgs}
						isMulty={false}
					/>
				</ProductImgWrap>
				{errorInfo.itemImage.state && (
					<ImgErrorText>상품의 이미지를 업로드해주세요.</ImgErrorText>
				)}
				<ProductName
					productInfo={productInfo}
					setProductInfo={setProductInfo}
					errorInfo={errorInfo}
					setErrorInfo={setErrorInfo}
				/>
				<ProductPrice
					productInfo={productInfo}
					setProductInfo={setProductInfo}
					errorInfo={errorInfo}
					setErrorInfo={setErrorInfo}
				/>
				<ProductLink
					productInfo={productInfo}
					setProductInfo={setProductInfo}
					errorInfo={errorInfo}
					setErrorInfo={setErrorInfo}
				/>
				<ProductBtn type="submit" disabled={isDisable}>
					전송
				</ProductBtn>
			</fieldset>
		</ProductFormStyle>
	);
}
export default ProductForm;
