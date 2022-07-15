import React from 'react';
import styled from 'styled-components';
import SplashHeader from '../components/splash/SplashHeader';
import Wrap from '../components/common/Wrap';
import splashImg from '../assets/splashImg.png';
import {
	TitleStyle,
	Maintitle,
	JoinTitle,
	JoinTitleP,
	JoinTitleClick,
} from '../components/splash/SplashTitle.style';
import {
	LoginBtnDiv,
	EmailBtn,
	KakaoBtn,
	GoggleBtn,
	FacebookBtn,
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

function SplashLogin() {
	return (
		<BackgroundImg>
			<SplashHeader />

			<Container>
				<TitleStyle>
					<Maintitle>환영합니다!</Maintitle>
					<Maintitle>계정을 선택해주세요.</Maintitle>
				</TitleStyle>

				<LoginBtnDiv>
					<EmailBtn>이메일로 로그인</EmailBtn>
					<KakaoBtn>카카오톡 계정으로 로그인</KakaoBtn>
					<GoggleBtn>구글 계정으로 로그인</GoggleBtn>
					<FacebookBtn>페이스북 계정으로 로그인</FacebookBtn>
				</LoginBtnDiv>

				<JoinTitle>
					<JoinTitleP>아직 회원이 아니신가요?</JoinTitleP>
					<a href="/">
						<JoinTitleClick>회원가입</JoinTitleClick>
					</a>
				</JoinTitle>
			</Container>

			<SplashFooter />
		</BackgroundImg>
	);
}

export default SplashLogin;
