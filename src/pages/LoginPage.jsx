import React from 'react';
import Header from '../components/common/Header';
import MainTitle from '../components/MainTitle';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import BookImg from '../assets/BookImg.png';
import { BigBtnDiv } from '../components/common/Button.style';
import { BigBtn } from '../components/common/Button.style';
import FormWrap from '../components/FormWrap.style';
import { InputStyle } from '../components/common/Input.style';
import { LabelStyle } from '../components/common/Input.style';
import { InputDiv } from '../components/common/Input.style';
// 이메일 또는 비밀번호가 일치하지 않았을때 import한다.
//import { ErrorText } from '../components/Input.style';

const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
`;

const BookLogo = styled.img`
	width: 55px;
	height: 70px;
	margin-top: 14rem;
	margin-bottom: 1rem;
	@media (max-width: 390px) {
		display: none;
	}
`;

const SubTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: 13.7rem;
`;

const SubTitleP = styled.p`
	color: ${({ theme }) => theme.grayColor1};
	font-weight: 400;
	font-size: 2rem;
	@media (max-width: 390px) {
		font-weight: 300;
		font-size: 1.4rem;
	}
`;

const SubTitleClick = styled(SubTitleP)`
	font-weight: 700;
	margin-left: 0.5rem;
	@media (max-width: 390px) {
		font-size: 14px;
	}
`;

function LoginPage() {
	return (
		<div>
			<Header />

			<ImgWrap>
				<BookLogo src={BookImg} />
			</ImgWrap>

			<MainTitle />

			<FormWrap>
				<InputDiv>
					<LabelStyle htmlFor="id" className="hide">
						아이디
					</LabelStyle>
					<InputStyle
						type="email"
						id="id"
						placeholder="아이디를 입력하세요."
					/>
				</InputDiv>
				<InputDiv>
					<LabelStyle htmlFor="password" className="hide">
						비밀번호
					</LabelStyle>
					<InputStyle
						type="password"
						id="password"
						placeholder="비밀번호를 입력하세요."
					/>
					{/* '로그인' 페이지에서 이메일, 비밀번호가 일치하지 않았을 경우 나타나는 문구
					<ErrorText>
						*이메일 또는 비밀번호가 일치하지 않습니다.
					</ErrorText> */}
				</InputDiv>
				<BigBtnDiv>
					<BigBtn>로그인</BigBtn>
				</BigBtnDiv>
			</FormWrap>

			<SubTitle>
				<SubTitleP>아직 회원이 아니신가요?</SubTitleP>
				{/* '회원가입' 누르면 '회원가입'화면으로 이동 */}
				<a href="/">
					<SubTitleClick>회원가입</SubTitleClick>
				</a>
			</SubTitle>

			<Footer />
		</div>
	);
}

export default LoginPage;
