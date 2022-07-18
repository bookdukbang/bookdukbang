import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${({ theme }) => theme.size.mobile} {
		align-items: flex-start;
		margin-top: 7rem;
	}
`;

const TitleP = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
	font-size: 3.6rem;
	@media ${({ theme }) => theme.size.mobile} {
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
