import React from 'react';
import { Link } from 'react-router-dom';
import {
	TitleStyle,
	Maintitle,
	JoinTitleP,
	JoinTitleLink,
} from './SplashTitle.style';
import {
	LoginBtnDiv,
	EmailBtn,
	KakaoBtn,
	GoggleBtn,
	FacebookBtn,
} from './SplashButton.style';

function SplashLogin() {
	return (
		<>
			<TitleStyle>
				<Maintitle>환영합니다!</Maintitle>
				<Maintitle>계정을 선택해주세요.</Maintitle>
			</TitleStyle>

			<LoginBtnDiv>
				<EmailBtn as={Link} to="/login">
					이메일로 로그인
				</EmailBtn>
				<KakaoBtn type="button">카카오톡 계정으로 로그인</KakaoBtn>
				<GoggleBtn type="button">구글 계정으로 로그인</GoggleBtn>
				<FacebookBtn type="button">
					페이스북 계정으로 로그인
				</FacebookBtn>
			</LoginBtnDiv>

			<JoinTitleP>
				아직 회원이 아니신가요?
				<JoinTitleLink to="/join">회원가입</JoinTitleLink>
			</JoinTitleP>
		</>
	);
}

export default SplashLogin;
