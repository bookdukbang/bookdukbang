import React from 'react';
import {
	InputDiv,
	InputStyle,
	LabelStyle,
	ErrorText,
} from '../common/Input.style';

function ProductName({ productInfo, setProductInfo, errorInfo, setErrorInfo }) {
	const onChangeProductName = (e) => {
		validation(e.target.value);
		setProductInfo((cur) => ({ ...cur, itemName: e.target.value }));
	};

	// productName 유효성 검사
	function validation(itemName) {
		if (itemName === '') {
			setErrorInfo((cur) => ({
				...cur,
				itemName: {
					state: true,
					message: '필수 입력사항을 입력해주세요.',
				},
			}));
			return false;
		} else if (itemName < 2 || itemName.length > 15) {
			setErrorInfo((cur) => ({
				...cur,
				itemName: {
					state: true,
					message: '상품 이름은 2~15자 이내여야 합니다.',
				},
			}));
			return false;
		} else {
			setErrorInfo((cur) => ({
				...cur,
				itemName: {
					state: false,
					message: '',
				},
			}));
			return true;
		}
	}

	return (
		<InputDiv>
			<LabelStyle htmlFor="productName">상품명</LabelStyle>
			<InputStyle
				type="text"
				name="productName"
				id="productName"
				autoComplete="off"
				placeholder="2~15자 이내여야 합니다."
				onChange={onChangeProductName}
				value={productInfo.itemName}
				className={`${errorInfo.itemName.state ? 'error' : ''}`}
				required
			/>
			{errorInfo.itemName.state && (
				<ErrorText>{errorInfo.itemName.message}</ErrorText>
			)}
		</InputDiv>
	);
}
export default ProductName;
