import React, { useState } from 'react';
import styled from 'styled-components';
// import ProductModal from '../../profile/ProductModa222l';
import ProductDetail from './ProductDetail';

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
	color: ${({ theme }) => theme.whiteColor};
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

function ProductBtn({ item }) {
	const [modalInfo, setModalInfo] = useState({
		state: false,
		productId: '',
	});

	const onClickMoreBtn = () => {
		setModalInfo({
			state: true,
			productId: item.id,
		});
	};

	return (
		<>
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
							)}
							원
						</BookCost>
					</BookInfo>
				</BookBtn>
			</BookDivCont>
			{modalInfo.state && (
				<ProductDetail
					modalInfo={modalInfo}
					setModalInfo={setModalInfo}
				/>
			)}
		</>
	);
}
export default ProductBtn;
