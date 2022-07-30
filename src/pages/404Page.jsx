import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/header/FeedHeader';
import Error from '../assets/errorImg.png';
import { ButtonStyle } from '../components/common/Button.style';
import Wrap from '../components/common/Wrap';
import { Link } from 'react-router-dom';

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

const Title = styled.p`
	color: ${({ theme }) => theme.grayColor2};
	font-weight: 700;
	font-size: 3.6rem;
	text-align: center;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 2.4rem;
	}
`;

const ErrorBtn = styled(ButtonStyle)`
	width: 17rem;
	text-align: center;
	padding: 1rem 0;
	font-size: 2rem;
	margin: 2rem auto 0;
`;

function ErrorPage() {
	return (
		<>
			<FeedHeader />
			<Wrap>
				<Container>
					<ErrorImg src={Error} />

					<Title>페이지를 찾을 수 없습니다. :(</Title>

					<ErrorBtn as={Link} to="/feed">
						홈으로 가기
					</ErrorBtn>
				</Container>
			</Wrap>
		</>
	);
}

export default ErrorPage;
