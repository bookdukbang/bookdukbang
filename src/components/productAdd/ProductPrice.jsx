import React, { useState } from 'react';
import {
	InputDiv,
	InputStyle,
	LabelStyle,
	ErrorText,
} from '../common/Input.style';

function ProductPrice({ setProductInfo, errorInfo, setErrorInfo }) {
	const [priceCom, setPriceCom] = useState('');

	// 가격에 콤마넣기
	const onBlurCommaPrice = (e) => {
		const addComma = (num) => {
			const regexp = /\B(?=(\d{3})+(?!\d))/g;
			return num.replace(regexp, ',');
		};
		setPriceCom(addComma(e.target.value));
	};

	// onchange event
	const onChangeProductPrice = (e) => {
		validation(e.target.value);
		setProductInfo((cur) => ({
			...cur,
			price: parseInt(e.target.value.replace(/[^0-9]/g, '')),
		}));
		setPriceCom(e.target.value.replace(/[^0-9]/g, ''));
	};

	// productName 유효성 검사
	function validation(price) {
		const regexp = /[^0-9]/g;
		if (price === '') {
			setErrorInfo((cur) => ({
				...cur,
				price: {
					state: true,
					message: '필수 입력사항을 입력해주세요.',
				},
			}));
			return false;
		} else if (regexp.test(price)) {
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
				onBlur={onBlurCommaPrice}
				className={`${errorInfo.price.state ? 'error' : ''}`}
				value={priceCom}
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
