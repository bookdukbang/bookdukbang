import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

function ProductEditPage() {
	const navigate = useNavigate();
	const { id } = useParams();
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
			state: true,
		},
	});

	useEffect(() => {
		productUploadAPI();
	}, []);

	// 상품 데이터 받아오기
	async function productUploadAPI() {
		const reqPath = `/product/detail/${id}`;

		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const json = await res.json();

			if (json.status === 404) {
				throw navigate('/errorPage');
			}

			setProductInfo((cur) => ({
				...cur,
				itemName: json.product.itemName,
				price: json.product.price,
				link: json.product.link,
				itemImage: json.product.itemImage,
			}));
		} catch (err) {
			console.error(err);
		}
	}

	// 상품 데이터 보내기
	async function productModifyAPI() {
		const reqPath = `/product/${id}`;
		const productData = {
			product: {
				...productInfo,
			},
		};
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
				body: JSON.stringify(productData),
			});
			const json = await res.json();

			if (json.status === 404) {
				throw navigate('/errorPage');
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
					formAPI={productModifyAPI}
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
