import React from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/Footer';
import JoinForm from '../components/join/JoinForm';
import MainTitle from '../components/common/MainTitle';
import Wrap from '../components/common/Wrap';
import styled from 'styled-components';

const JoinArticle = styled.article`
	margin-top: 18.6rem;
	margin-bottom: 14.3rem;
	@media ${({ theme }) => theme.size.mobile} {
		margin-top: 0;
	}
`;

function JoinPage() {
	return (
		<>
			<Header />
			<Wrap>
				<JoinArticle>
					<MainTitle
						firstText="이메일로 간편하게"
						secondText="회원가입을 시작해볼까요?"
					/>
					<JoinForm />
				</JoinArticle>
			</Wrap>
			<Footer />
		</>
	);
}

export default JoinPage;
