import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 3.4rem;
	/* margin-bottom: 3rem; */
	@media (max-width: 390px) {
		align-items: flex-start;
		margin-top: 7rem;
	}
`;

const TitleP = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
	font-size: 3.6rem;
	@media (max-width: 390px) {
		font-size: 2.4rem;
	}
`;

function MainTitle({ firstText, secondText }) {
	return (
		<TitleStyle>
			<TitleP>{firstText}</TitleP>
			<TitleP>{secondText}</TitleP>
		</TitleStyle>
	);
}

export default MainTitle;
