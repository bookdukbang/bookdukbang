import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { SERVER_URL } from '../../constants';
import Product from '../common/Product';

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

function UserProductRegister() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	let { id } = useParams();
	const [userBooks, setUserBooks] = useState(null);

	async function userProduct() {
		try {
			const res = await fetch(SERVER_URL + `/product/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
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
					<Product key={item.id} item={item} />
				))}
			</BookContainer>
		</>
	);
}

export default UserProductRegister;
