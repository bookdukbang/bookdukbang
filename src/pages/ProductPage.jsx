import React from 'react';
import ProductForm from '../components/productAdd/ProductForm';
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

function ProductPage() {
	return (
		<>
			<FeedHeader>
				<ProductHeaderTitle>새상품 등록</ProductHeaderTitle>
			</FeedHeader>
			<ProductWrap>
				<ProductForm />
			</ProductWrap>
		</>
	);
}
export default ProductPage;
