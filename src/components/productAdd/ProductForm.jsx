import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoneProductImg from '../../assets/none-product.png';
import PostUploadImg from '../common/post/PostUploadImg';
import { SERVER_URL } from '../../constants';
import {
	ProductBtn,
	ProductFormStyle,
	ProductImgWrap,
	ProductImg,
} from './ProductForm.style';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductLink from './ProductLink';
import { ErrorText } from '../common/Input.style';
import styled from 'styled-components';

const ImgErrorText = styled(ErrorText)`
	margin-bottom: 3rem;
`;

function ProductForm() {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState(null);
	const [uploadImgs, setUploadImgs] = useState([]);
	const [isDisable, setIsDisable] = useState(true);
	const [productInfo, setProductInfo] = useState({
		itemName: '',
		price: '',
		link: '',
		itemImage: '',
	});
	const [errorInfo, setErrorInfo] = useState({
		itemName: {
			state: false,
			message: '',
		},
		price: {
			state: false,
			message: '',
		},
		link: {
			state: false,
			message: '',
		},
		itemImage: {
			state: false,
		},
	});

	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem('user')));
	}, []);

	useEffect(() => {
		if (productInfo.itemImage === '') {
			setErrorInfo((cur) => ({
				...cur,
				itemImage: {
					state: true,
				},
			}));
		} else {
			setErrorInfo((cur) => ({
				...cur,
				itemImage: {
					state: false,
				},
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
				throw navigate('/errorPage');
			}
			return json;
		} catch (err) {
			console.error(err);
		}
	}

	// 서버로 form 보내기
	async function productUploadAPI() {
		const reqPath = '/product';
		const productData = {
			product: {
				...productInfo,
			},
		};
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
					'Content-type': 'application/json',
				},
				body: JSON.stringify(productData),
			});
			const json = await res.json();

			if (json.status === 404) {
				throw navigate('/errorPage');
			} else if (json.status === 422) {
				throw setErrorInfo((cur) => ({
					...cur,
					price: {
						state: true,
						message: json.message,
					},
				}));
			}
			navigate(-1);
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
				.then((src) =>
					setProductInfo((cur) => ({ ...cur, itemImage: src })),
				);
		}
	}, [uploadImgs]);

	// 서버에 입력 form 제출
	const onSubmitImg = (e) => {
		e.preventDefault();
		if (!isDisable) {
			productUploadAPI();
		}
	};

	return (
		<ProductFormStyle onSubmit={onSubmitImg}>
			<fieldset>
				<legend>상품등록 양식</legend>
				<ProductImgWrap>
					{uploadImgs.length !== 0 ? (
						<ProductImg
							src={URL.createObjectURL(uploadImgs)}
							alt={uploadImgs.name}
							id={uploadImgs.lastModified}
						/>
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
