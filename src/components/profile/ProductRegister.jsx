import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlusBtn from '../../assets/plus_btn.png';
import { SERVER_URL } from '../../constants';
import ProductModal from './ProductModal';

const BookContainer = styled.div`
	display: grid;
	grid-template-columns: 31.5rem 31.5rem;
	grid-template-rows: 25.2rem 25.2rem;
	row-gap: 2.2rem;
	column-gap: 2rem;
	border-radius: 1rem;
	margin-top: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		grid-template-columns: 15rem 15rem 15rem 15rem;
		grid-template-rows: 12rem;
		gap: 0.5rem;
		margin-left: 1rem;
		overflow-x: scroll;
		overflow-y: hidden;
	}
`;

const BookBtn = styled.button`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 100%;
	border: 0;
	border-radius: 1rem;
	background-size: cover;
	background-position: center;
	position: relative;
	z-index: -1;
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

const BookInfo = styled.div`
	position: absolute;
	bottom: 2.1rem;
	left: 2.1rem;
	@media ${({ theme }) => theme.size.mobile} {
		bottom: 1rem;
		left: 1rem;
	}
`;

const BookTitle = styled.p`
	font-weight: 400;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor5};
	text-align: left;
	z-index: 10;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 400;
		font-size: 14px;
	}
`;

const BookCost = styled.p`
	font-weight: 700;
	font-size: 1.4rem;
	text-align: left;
	color: ${({ theme }) => theme.mainColor};
	z-index: 10;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 400;
		font-size: 14px;
	}
`;

const BookRegister = styled.div`
	border: 1px dashed ${({ theme }) => theme.grayColor2};
	border-radius: 1rem;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const RegisterBtn = styled.button`
	border: none;
	background-color: transparent;
	margin-bottom: 1rem;
	text-align: center;
`;

const PlusBtnImg = styled.img`
	width: 7rem;
	margin-bottom: 1rem;
`;

const RegisterTitle = styled.p`
	font-weight: 700;
	font-size: 2.4rem;
	color: ${({ theme }) => theme.grayColor2};
`;

function ProductRegister() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const MyAccountName = JSON.parse(localStorage.getItem('user')).accountname;
	const [books, setBooks] = useState(null);
	const [modalInfo, setModalInfo] = useState({
		state: false,
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

	const onClickMoreBtn = () => {
		setModalInfo({
			state: true,
		});
	};

	return (
		<>
			<BookContainer>
				{books?.map((item) => (
					<BookBtn
						type="button"
						style={{
							backgroundImage: `url(${item.itemImage})`,
						}}
						key={item.id}
						onClick={onClickMoreBtn}
					>
						<BookInfo>
							<BookTitle>{item.itemName}</BookTitle>
							<BookCost>
								{`${item.price}`.replace(
									/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
									',',
								)}{' '}
								원
							</BookCost>
						</BookInfo>
					</BookBtn>
				))}
				<BookRegister>
					<RegisterBtn as={Link} to="/product">
						<PlusBtnImg src={PlusBtn} alt="" />
						<RegisterTitle>상품등록</RegisterTitle>
					</RegisterBtn>
				</BookRegister>
				{modalInfo.state && (
					<ProductModal
						modalInfo={modalInfo}
						setModalInfo={setModalInfo}
					/>
				)}
			</BookContainer>
		</>
	);
}

export default ProductRegister;
