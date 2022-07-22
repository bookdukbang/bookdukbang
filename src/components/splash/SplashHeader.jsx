import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../../assets/SplashHeaderLogo.png';
import Wrap from '../../components/common/Wrap';

const HeaderStyle = styled.header`
	padding: 2.7rem 0;
`;

const LogoImg = styled.img`
	width: 21.5rem;
	@media (max-width: 390px) {
		width: 11.6rem;
	}
`;
function Splash() {
	return (
		<HeaderStyle>
			<Wrap>
				<h1>
					<Link to="/">
						<LogoImg src={HeaderLogo} alt="북덕방" />
					</Link>
				</h1>
			</Wrap>
		</HeaderStyle>
	);
}

export default Splash;
