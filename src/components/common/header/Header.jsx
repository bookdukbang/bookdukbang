import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../../assets/HeaderLogo.png';
import Wrap from '../Wrap';
import { Link } from 'react-router-dom';

const HeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 2.7rem 0;

	& h1 {
		display: inline-block;
	}
`;

const LogoImg = styled.img`
	width: 21.5rem;
	@media ${({ theme }) => theme.size.tablet} {
		width: 16.6rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		width: 11.6rem;
	}
`;

function Header({ children }) {
	return (
		<HeaderStyle>
			<Wrap>
				<h1>
					<Link to="/feed">
						<LogoImg src={HeaderLogo} alt="북덕방" />
					</Link>
				</h1>
				{children}
			</Wrap>
		</HeaderStyle>
	);
}

export default Header;
