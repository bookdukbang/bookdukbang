import React from 'react';
import Wrap from '../common/Wrap';
import { FooterStyle, FooterPStyle } from '../common/Footer';

function SplashFooter() {
	return (
		<>
			<Wrap>
				<FooterStyle>
					<FooterPStyle primary>
						Copyright © 2022, All Rights Reserved
					</FooterPStyle>
				</FooterStyle>
			</Wrap>
		</>
	);
}

export default SplashFooter;
