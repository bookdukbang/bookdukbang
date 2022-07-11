import React from 'react';
import styled from 'styled-components';
import Wrap from './Wrap';

const FooterStyle = styled.footer`
	display: flex;
	justify-content: center;
`;

const FooterPStyle = styled.p`
	color: ${({ theme }) => theme.grayColor3};
	font-weight: 300;
	font-size: 1.6rem;
	padding: 4rem 0;
	@media (max-width: 390px) {
		/* 모바일 버전에서는 해당 글씨가 안보이게 한다. */
		display: none;
		/* 모바일 버전의 splash페이지에서의 해당 글씨 사이즈 */
		font-size: 1.2rem;
	}
`;

function Footer() {
	return (
		<Wrap>
			<FooterStyle>
				<FooterPStyle>
					Copyright © 2022, All Rights Reserved
				</FooterPStyle>
			</FooterStyle>
		</Wrap>
	);
}

export default Footer;
