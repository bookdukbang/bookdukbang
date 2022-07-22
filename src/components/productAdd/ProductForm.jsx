import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoneProductImg from '../../assets/none-product.png';
import PostUploadImg from '../common/post/PostUploadImg';
import { SERVER_URL, USER_TOKEN } from '../../constants';
import { InputStyle, LabelStyle } from '../common/Input.style';
import {
	ProductBtn,
	ProductFormStyle,
	ProductImgWrap,
	ProductImg,
} from './ProductForm.style';

function ProductForm() {
	const navigate = useNavigate();
	const [uploadImgs, setUploadImgs] = useState([]);
	const [priceCom, setPriceCom] = useState('');
	const [isDisable, setIsDisable] = useState(true);
	const [productInfo, setProductInfo] = useState({
		itemName: '',
		price: '',
		link: '',
		itemImage: '',
	});

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

			return json;
		} catch (err) {
			console.error(err.message);
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
					Authorization: `Bearer ${USER_TOKEN}`,
					'Content-type': 'application/json',
				},
				body: JSON.stringify(productData),
			});
			const json = await res.json();
			return json;
		} catch (err) {
			console.error(err.message);
		}
	}

	// input 입력 유무로 버튼 활성화
	useEffect(() => {
		if (
			productInfo.itemName === '' ||
			productInfo.price === '' ||
			productInfo.link === '' ||
			productInfo.itemImage === ''
		) {
			setIsDisable(true);
		} else {
			setIsDisable(false);
		}
	}, [productInfo]);

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

	// 인풋 입력 값 받기
	const onChangeProductInput = (e) => {
		if (e.target.name === 'productName') {
			setProductInfo((cur) => ({ ...cur, itemName: e.target.value }));
		} else if (e.target.name === 'productPrice') {
			setProductInfo((cur) => ({
				...cur,
				price: +e.target.value.replace(/[^0-9]/g, ''),
			}));
			setPriceCom(e.target.value.replace(/[^0-9]/g, ''));
		} else if (e.target.name === 'ProductSite') {
			setProductInfo((cur) => ({ ...cur, link: e.target.value }));
		}
	};

	// 가격에 콤마넣기
	const onBlurCommaPrice = (e) => {
		const addComma = (num) => {
			const regexp = /\B(?=(\d{3})+(?!\d))/g;
			return num.replace(regexp, ',');
		};
		setPriceCom(addComma(e.target.value));
	};

	// 서버에 입력 form 제출
	const onSubmitImg = (e) => {
		e.preventDefault();
		productUploadAPI().then(navigate('/myprofile'));
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
				<LabelStyle htmlFor="productName">상품명</LabelStyle>
				<InputStyle
					type="text"
					name="productName"
					id="productName"
					placeholder="2~15자 이내여야 합니다."
					onChange={onChangeProductInput}
					value={productInfo.itemName}
					minLength="2"
					maxLength="15"
					required
				/>
				<LabelStyle htmlFor="productPrice">가격</LabelStyle>
				<InputStyle
					type="text"
					name="productPrice"
					id="productPrice"
					placeholder="숫자만 입력 가능합니다."
					onChange={onChangeProductInput}
					onBlur={onBlurCommaPrice}
					value={priceCom}
					required
				/>
				<LabelStyle htmlFor="ProductSite">판매 링크</LabelStyle>
				<InputStyle
					type="url"
					name="ProductSite"
					id="ProductSite"
					placeholder="url을 입력해 주세요."
					onChange={onChangeProductInput}
					value={productInfo.link}
					required
				/>

				<ProductBtn type="submit" disabled={isDisable}>
					전송
				</ProductBtn>
			</fieldset>
		</ProductFormStyle>
	);
}
export default ProductForm;
