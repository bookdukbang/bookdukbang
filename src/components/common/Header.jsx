import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../assets/HeaderLogo.png';
import Wrap from './Wrap';

const HeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 2.7rem 0;

	& h1 {
		display: inline-block;
	}
`;

const LogoImg = styled.img`
	width: 21.5rem;
	@media (max-width: 390px) {
		width: 11.6rem;
	}
`;

function Header({ children }) {
	return (
		<HeaderStyle>
			<Wrap>
				<h1>
					<a href="/">
						<LogoImg src={HeaderLogo} alt="북덕방" />
					</a>
				</h1>
				{children}
			</Wrap>
		</HeaderStyle>
	);
}

export default Header;
