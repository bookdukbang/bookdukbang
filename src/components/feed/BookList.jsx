import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MediumBtn, MediumBtnDiv } from '../common/Button.style';
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import ProductDetail from '../common/product/ProductDetail';

const BookListWrap = styled.div`
	margin: 3rem 0;
`;

const BookBtn = styled.button`
	width: 100%;
	height: 7.8rem;
	border: 0;
	border-radius: 1rem;
	margin: 1rem 0;
	position: relative;
	background-size: cover;
	background-position: center;
	z-index: 1;
	&::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		border: 0;
		border-radius: 1rem;
		background-color: rgba(0, 0, 0, 0.6);
		top: 0;
		left: 0;
		z-index: -1;
	}
`;

const BookTitle = styled.p`
	text-align: left;
	color: ${({ theme }) => theme.whiteColor};
	font-weight: 400;
	font-size: 1.6rem;
	padding: 0 2rem;
	z-index: 10;
	& span {
		font-weight: 700;
		font-size: 1.4rem;
		display: block;
		color: ${({ theme }) => theme.mainColor};
	}
`;

const MediumBtnUpload = styled(MediumBtn)`
	text-align: center;
`;

function BookList() {
	const token = JSON.parse(sessionStorage.getItem('user')).token;
	const MyAccountName = JSON.parse(sessionStorage.getItem('user')).accountname;
	const [books, setBooks] = useState(null);
	const [modalInfo, setModalInfo] = useState({
		state: false,
		productId: '',
	});
	async function MyBookList() {
		try {
			const res = await fetch(SERVER_URL + `/product/${MyAccountName}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const result = await res.json();
			setBooks(result.product);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		MyBookList();
	}, []);

	const onClickMoreBtn = (e) => {
		setModalInfo({
			state: true,
			productId: e.currentTarget.id,
		});
	};

	return (
		<>
			<BookListWrap>
				{books?.map((item) => (
					<BookBtn
						key={item.id}
						id={item.id}
						type="button"
						style={{
							backgroundImage: `url(${item.itemImage})`,
						}}
						onClick={onClickMoreBtn}
					>
						<BookTitle>
							{item.itemName}
							<span>
								{`${item.price}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
							</span>
						</BookTitle>
					</BookBtn>
				))}
			</BookListWrap>
			{modalInfo.state && <ProductDetail modalInfo={modalInfo} setModalInfo={setModalInfo} />}
			<MediumBtnDiv>
				<MediumBtnUpload as={Link} to="/product/upload">
					상품 등록하기
				</MediumBtnUpload>
			</MediumBtnDiv>
		</>
	);
}

export default BookList;
