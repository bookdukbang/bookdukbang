import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/FeedHeader';
import Error from '../assets/errorImg.png';
import { ErrorBtnDiv, ErrorBtn } from '../components/common/Button.style';

const Container = styled.div`
	height: 85vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ErrorImg = styled.img`
	display: block;
	margin: 0 auto;
	width: 12.5rem;
	margin-bottom: 2.8rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 12rem;
		margin-bottom: 2rem;
	}
`;

const TitleStyle = styled.div`
	display: flex;
	justify-content: center;
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.grayColor2};
	font-weight: 700;
	font-size: 3.6rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 2.4rem;
	}
`;

const BeforePage = styled.p`
	text-align: center;
`;

function ErrorPage() {
	return (
		<>
			<FeedHeader />
			<Container>
				<ErrorImg src={Error} />

				<TitleStyle>
					<Title>페이지를 찾을 수 없습니다. :(</Title>
				</TitleStyle>

				<ErrorBtnDiv>
					<ErrorBtn as="a" href="/">
						<BeforePage>이전 페이지</BeforePage>
					</ErrorBtn>
				</ErrorBtnDiv>
			</Container>
		</>
	);
}

export default ErrorPage;
