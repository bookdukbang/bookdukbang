import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/product/ProductForm';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import styled from 'styled-components';
import { SERVER_URL } from '../constants';

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
	const navigate = useNavigate();
	const token = JSON.parse(sessionStorage.getItem('user')).token;
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
					Authorization: `Bearer ${token}`,
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

	return (
		<>
			<FeedHeader>
				<ProductHeaderTitle>새상품 등록</ProductHeaderTitle>
			</FeedHeader>
			<ProductWrap>
				<ProductForm
					formAPI={productUploadAPI}
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
export default ProductPage;
