import React from 'react';
import styled, { css } from 'styled-components';
import Wrap from './Wrap';

const FooterStyle = styled.footer`
	display: flex;
	justify-content: center;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
`;

const FooterPStyle = styled.p`
	color: ${({ theme }) => theme.grayColor3};
	font-weight: 300;
	font-size: 1.6rem;
	padding: 4rem 0;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.2rem;
		display: none;
		${(props) =>
			props.primary &&
			css`
				display: block;
			`}
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

export { FooterStyle, FooterPStyle };
export default Footer;
