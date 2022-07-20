import React from 'react';
import Header from '../components/common/header/Header';
import MainTitle from '../components/common/MainTitle';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import bookLogo from '../assets/bookLogo.png';
import LoginForm from '../components/login/LoginForm';
import { Link } from 'react-router-dom';
import Wrap from '../components/common/Wrap';

const ImgWrap = styled.div`
	display: flex;
	justify-content: center;
`;

const BookLogo = styled.img`
	width: 55px;
	height: 70px;
	margin-top: 14rem;
	margin-bottom: 1rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const SubTitleP = styled.p`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	margin-bottom: 13.7rem;
	color: ${({ theme }) => theme.grayColor1};
	font-weight: 400;
	font-size: 2rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 300;
		font-size: 1.4rem;
	}
`;

const SubTitleLink = styled(Link)`
	font-weight: 700;
	margin-left: 0.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 14px;
	}
`;

function LoginPage() {
	return (
		<>
			<Header />

			<Wrap>
				<ImgWrap>
					<BookLogo src={bookLogo} />
				</ImgWrap>

				<MainTitle
					firstText="BOOK덕방에서"
					secondText="다양한 책을 만나보세요!"
				/>

				<LoginForm />

				<SubTitleP>
					아직 회원이 아니신가요?
					<SubTitleLink to="/join">회원가입</SubTitleLink>
				</SubTitleP>
			</Wrap>

			<Footer />
		</>
	);
}

export default LoginPage;
