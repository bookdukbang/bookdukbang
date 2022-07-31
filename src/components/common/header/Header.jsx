import React, { useContext } from 'react';
import HeaderLogoLight from '../../../assets/HeaderLogo.png';
import HeaderLogoDark from '../../../assets/logo_dark.png';
import styled from 'styled-components';
import Wrap from '../Wrap';
import { Link } from 'react-router-dom';
import { ThemeModeContext } from '../../../context/ThemeModeContext';
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
	const { mode } = useContext(ThemeModeContext);
	return (
		<HeaderStyle>
			<Wrap>
				<h1>
					<Link to="/feed">
						{mode === 'light' ? (
							<LogoImg src={HeaderLogoLight} alt="북덕방" />
						) : (
							<LogoImg src={HeaderLogoDark} alt="북덕방" />
						)}
					</Link>
				</h1>
				{children}
			</Wrap>
		</HeaderStyle>
	);
}

export default Header;
