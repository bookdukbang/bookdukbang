import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/product/ProductForm';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import styled from 'styled-components';
import { useProductAxios } from '../hooks/useProductAxios';

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

function ProductEditPage() {
	const { getProduct, editProduct } = useProductAxios();
	const { id } = useParams();
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
		itemImage: { state: true },
	});

	useEffect(() => {
		getProduct(id).then((productData) => {
			setProductInfo((cur) => ({
				...cur,
				itemName: productData.itemName,
				price: productData.price,
				link: productData.link,
				itemImage: productData.itemImage,
			}));
		});
	}, []);

	return (
		<>
			<FeedHeader>
				<ProductHeaderTitle>새상품 등록</ProductHeaderTitle>
			</FeedHeader>
			<ProductWrap>
				<ProductForm
					formAPI={editProduct}
					productInfo={productInfo}
					setProductInfo={setProductInfo}
					errorInfo={errorInfo}
					setErrorInfo={setErrorInfo}
					isEdit={true}
				/>
			</ProductWrap>
		</>
	);
}
export default ProductEditPage;
