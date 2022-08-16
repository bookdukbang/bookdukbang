import React, { useState } from 'react';
import ProductForm from '../components/product/ProductForm';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import styled from 'styled-components';

const ProductWrap = styled(Wrap)`
	margin-top: 3rem;

	@media ${({ theme }) => theme.size.mobile} {
		margin-top: 1rem;
	}
`;

const ProductHeaderTitle = styled.span`
	display: none;
	font-size: 1.6rem;
	font-weight: 700;

	@media ${({ theme }) => theme.size.mobile} {
		display: block;
	}
`;

function ProductUploadPage() {
	const [productInfo, setProductInfo] = useState({
		itemName: '',
		price: '',
		link: '',
		itemImage: '',
	});
	const [errorInfo, setErrorInfo] = useState({
		itemName: { state: false, message: '' },
		price: { state: false, message: '' },
		link: { state: false, message: '' },
		itemImage: { state: false },
	});

	return (
		<>
			<FeedHeader>
				<ProductHeaderTitle>새상품 등록</ProductHeaderTitle>
			</FeedHeader>
			<ProductWrap>
				<ProductForm
					productInfo={productInfo}
					setProductInfo={setProductInfo}
					errorInfo={errorInfo}
					setErrorInfo={setErrorInfo}
					isEdit={false}
				/>
			</ProductWrap>
		</>
	);
}
export default ProductUploadPage;
