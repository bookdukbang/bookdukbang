import React from 'react';
import styled from 'styled-components';
import Wrap from './Wrap';

const FooterStyle = styled.footer`
	text-align: center;
	@media ${({ theme }) => theme.size.mobile} {
		display: ${({ isHome }) => (isHome ? 'block' : 'none')};
	}
`;

const FooterPStyle = styled.small`
	color: ${({ theme }) => theme.grayColor3};
	font-weight: 300;
	font-size: 1.6rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 300;
		font-size: 1.2rem;
	}
`;

function Footer({ isHome }) {
	return (
		<FooterStyle isHome={isHome}>
			<Wrap>
				<FooterPStyle>
					Copyright © 2022, All Rights Reserved
				</FooterPStyle>
			</Wrap>
		</FooterStyle>
	);
}

export default Footer;
