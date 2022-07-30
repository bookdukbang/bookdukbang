import React from 'react';
import {
	InputDiv,
	InputStyle,
	LabelStyle,
	ErrorText,
} from '../common/Input.style';

function ProductLink({ productInfo, setProductInfo, errorInfo, setErrorInfo }) {
	// onchange event
	const onChangeProductLink = (e) => {
		if (e.target.value === '') {
			setErrorInfo((cur) => ({
				...cur,
				link: {
					state: true,
					message: '필수 입력사항을 입력해주세요.',
				},
			}));
			setProductInfo((cur) => ({ ...cur, price: '' }));
		} else if (validation(e.target.value)) {
			setProductInfo((cur) => ({
				...cur,
				link: e.target.value,
			}));
		}
	};

	// ProductLink 유효성 검사
	function validation(link) {
		const regexp = /^(http(s)?:\/\/)([^/]*)/gi;
		if (!regexp.test(link)) {
			setErrorInfo((cur) => ({
				...cur,
				link: {
					state: true,
					message: '올바른 url을 작성해주세요.',
				},
			}));
			return false;
		} else {
			setErrorInfo((cur) => ({
				...cur,
				link: {
					state: false,
					message: '',
				},
			}));
			return true;
		}
	}

	return (
		<InputDiv>
			<LabelStyle htmlFor="ProductLink">판매 링크</LabelStyle>
			<InputStyle
				type="url"
				name="ProductLink"
				id="ProductLink"
				placeholder="url을 입력해 주세요."
				autoComplete="off"
				onChange={onChangeProductLink}
				value={productInfo.link}
				className={`${errorInfo.link.state ? 'error' : ''}`}
				required
			/>
			{errorInfo.link.state && (
				<ErrorText>{errorInfo.link.message}</ErrorText>
			)}
		</InputDiv>
	);
}
export default ProductLink;
