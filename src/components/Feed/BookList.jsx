import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import BookImg from '../../assets/BookListImg.png';
import { MediumBtn, MediumBtnDiv } from '../common/Button.style';
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../../constants';

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
	z-index: -1;
	&::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		border: 0;
		border-radius: 1rem;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		z-index: -1;
	}
`;

const BookTitle = styled.p`
	text-align: left;
	color: ${({ theme }) => theme.grayColor5};
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
	const token = JSON.parse(localStorage.getItem('user')).token;
	const MyAccountName = JSON.parse(localStorage.getItem('user')).accountname;
	const [books, setBooks] = useState(null);
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
	return (
		<>
			<BookListWrap>
				{books?.map((item, i) => (
					<BookBtn
						key={i}
						type="button"
						style={{
							backgroundImage: `url(${item.itemImage})`,
						}}
					>
						<BookTitle>
							{item.itemName}
							<span>{item.price}원</span>
						</BookTitle>
					</BookBtn>
				))}
			</BookListWrap>
			<MediumBtnDiv>
				<MediumBtnUpload as={Link} to="/product">
					상품 등록하기
				</MediumBtnUpload>
			</MediumBtnDiv>
		</>
	);
}

export default BookList;
