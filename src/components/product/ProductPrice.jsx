import React from 'react';
import {
	InputDiv,
	InputStyle,
	LabelStyle,
	ErrorText,
} from '../common/Input.style';

function ProductPrice({
	setProductInfo,
	errorInfo,
	setErrorInfo,
	productInfo,
}) {
	const commaRegexp = /\B(?=(\d{3})+(?!\d))/g; // 3단위 마다 ,넣기

	// onchange event
	const onChangeProductPrice = (e) => {
		if (e.target.value === '') {
			setErrorInfo((cur) => ({
				...cur,
				price: {
					state: true,
					message: '필수 입력사항을 입력해주세요.',
				},
			}));
			setProductInfo((cur) => ({ ...cur, price: '' }));
		} else if (validation(e.target.value)) {
			setProductInfo((cur) => ({
				...cur,
				price: parseInt(e.target.value.replace(/[^0-9]/g, '')),
			}));
		}
	};

	// productName 유효성 검사
	function validation(price) {
		const regexp = /[^0-9,]/g;

		if (regexp.test(price)) {
			setErrorInfo((cur) => ({
				...cur,
				price: {
					state: true,
					message: '숫자만 입력해주세요.',
				},
			}));
			return false;
		} else {
			setErrorInfo((cur) => ({
				...cur,
				price: {
					state: false,
					message: '',
				},
			}));
			return true;
		}
	}

	return (
		<InputDiv>
			<LabelStyle htmlFor="productPrice">가격</LabelStyle>
			<InputStyle
				type="text"
				name="productPrice"
				id="productPrice"
				placeholder="숫자만 입력 가능합니다."
				autoComplete="off"
				onChange={onChangeProductPrice}
				className={`${errorInfo.price.state ? 'error' : ''}`}
				value={String(productInfo.price).replace(commaRegexp, ',')}
				maxLength={9}
				required
			/>
			{errorInfo.price.state && (
				<ErrorText>{errorInfo.price.message}</ErrorText>
			)}
		</InputDiv>
	);
}
export default ProductPrice;
