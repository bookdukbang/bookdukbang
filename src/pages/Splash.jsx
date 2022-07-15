import React from 'react';
import styled from 'styled-components';
import splashImg from '../assets/splashImg.png';
import SplashHeader from '../components/splash/SplashHeader';
import Wrap from '../components/common/Wrap';
import {
	TitleStyle,
	Maintitle,
	Subtitle,
} from '../components/splash/SplashTitle.style';
import {
	SplashBtnDiv,
	SplashBtn,
} from '../components/splash/SplashButton.style';
import SplashFooter from '../components/splash/SplashFooter';

const BackgroundImg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${splashImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

const Container = styled(Wrap)`
	height: 80vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

function Splash() {
	return (
		<BackgroundImg>
			<SplashHeader />

			<Container>
				<TitleStyle>
					<Maintitle>노래하며 수 가슴에 할지니, </Maintitle>
					<Maintitle>이것을 싹이 타오르고 듣는다.</Maintitle>
					<Subtitle>보라. 없는 착목한는 광야에서 이것이다.</Subtitle>
				</TitleStyle>

				<SplashBtnDiv>
					<SplashBtn>다양한 친구들을 만나보세요!</SplashBtn>
				</SplashBtnDiv>
			</Container>

			<SplashFooter />
		</BackgroundImg>
	);
}

export default Splash;
