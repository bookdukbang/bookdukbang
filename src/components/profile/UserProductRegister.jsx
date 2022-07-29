import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SERVER_URL } from '../../constants';

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

const BookList = styled.div`
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

function UserProductRegister() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const location = useLocation();
	const data = location.state.data;
	const [userBooks, setUserBooks] = useState(null);

	async function userProduct() {
		try {
			const res = await fetch(
				SERVER_URL + `/product/${data.accountname}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
			const result = await res.json();
			setUserBooks(result.product);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		userProduct();
	}, []);
	return (
		<>
			<BookContainer>
				{userBooks?.map((item) => (
					<BookList key={item.id}>
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
					</BookList>
				))}
			</BookContainer>
		</>
	);
}

export default UserProductRegister;
