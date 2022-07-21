import React from 'react';
import styled from 'styled-components';
import BookImg from '../../assets/BookListImg.png';
import { MediumBtn, MediumBtnDiv } from '../common/Button.style';

const BookListWrap = styled.div`
	margin: 3rem 0;
`;

const BookBtn = styled.button`
	width: 100%;
	height: 7.8rem;
	border: 0;
	border-radius: 1rem;
	margin: 1rem 0;
	background-image: url(${BookImg});
	background-size: cover;
	background-position: center;
`;

const BookTitle = styled.p`
	text-align: left;
	color: ${({ theme }) => theme.grayColor5};
	font-weight: 400;
	font-size: 1.6rem;
	padding: 0 2rem;
	& span {
		display: block;
		color: ${({ theme }) => theme.mainColor};
	}
`;

function BookList() {
	return (
		<>
			<BookListWrap>
				<BookBtn type="button">
					<BookTitle>
						책제목<span>99,000원</span>
					</BookTitle>
				</BookBtn>
				<BookBtn type="button">
					<BookTitle>
						책제목<span>99,000원</span>
					</BookTitle>
				</BookBtn>
				<BookBtn type="button">
					<BookTitle>
						책제목<span>99,000원</span>
					</BookTitle>
				</BookBtn>
			</BookListWrap>
			<MediumBtnDiv>
				<MediumBtn type="button">상품 등록하기</MediumBtn>
			</MediumBtnDiv>
		</>
	);
}

export default BookList;
