import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PlusBtn from '../../assets/plus_btn.png';
import { useProductAxios } from '../../hooks/useProductAxios';
import ProductBtn from '../common/product/ProductBtn';

const BookContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 2rem;
	margin-top: 2rem;
	@media ${({ theme }) => theme.size.mobile} {
		flex-wrap: nowrap;
		max-width: 34rem;
		overflow: auto hidden;
		${({ theme }) => theme.ScrollbarStyle()}
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

function ProductRegister({ ismyPage }) {
	const { getProductList } = useProductAxios();
	let { id } = useParams();
	const [books, setBooks] = useState(null);

	useEffect(() => {
		getProductList(id).then((productLiist) => {
			setBooks(productLiist);
		});
	}, []);

	return (
		<>
			<BookContainer>
				{books?.map((item) => (
					<ProductBtn key={item.id} item={item} />
				))}
				{ismyPage && (
					<BookRegister>
						<RegisterBtn as={Link} to="/product/upload">
							<PlusBtnImg src={PlusBtn} alt="" />
							<RegisterTitle>상품등록</RegisterTitle>
						</RegisterBtn>
					</BookRegister>
				)}
			</BookContainer>
		</>
	);
}

export default ProductRegister;
