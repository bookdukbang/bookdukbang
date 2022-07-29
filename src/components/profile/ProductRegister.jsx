import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlusBtn from '../../assets/plus_btn.png';
import { SERVER_URL } from '../../constants';
import ProductModal from './ProductModal';

const BookContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 2rem;
	margin-top: 2rem;
	@media ${({ theme }) => theme.size.mobile} {
		flex-wrap: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		${({ theme }) => theme.ScrollbarStyle()}
	}
`;

const BookDivCont = styled.div`
	cursor: pointer;
`;

const BookBtn = styled.button`
	position: relative;
	width: 31.5rem;
	height: 25.2rem;
	border: 0;
	border-radius: 1rem;
	background-size: cover;
	background-position: center;
	position: relative;
	z-index: -1;
	@media ${({ theme }) => theme.size.mobile} {
		width: 15rem;
		height: 12rem;
	}
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
	text-align: left;
	z-index: 10;
	@media ${({ theme }) => theme.size.mobile} {
		bottom: 1rem;
		left: 1rem;
	}
`;

const BookTitle = styled.p`
	font-weight: 400;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor5};
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 400;
		font-size: 14px;
	}
`;

const BookCost = styled.p`
	font-weight: 700;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.mainColor};
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 400;
		font-size: 14px;
	}
`;

const BookRegister = styled.div`
	border: 1px dashed ${({ theme }) => theme.grayColor2};
	border-radius: 1rem;
	width: 31.5rem;
	height: 25.2rem;
	box-sizing: border-box;
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
					<BookDivCont key={item.id} onClick={onClickMoreBtn}>
						<BookBtn
							type="button"
							style={{
								backgroundImage: `url(${item.itemImage})`,
							}}
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
					</BookDivCont>
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
