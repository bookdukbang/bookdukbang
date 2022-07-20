import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/header/FeedHeader';
import MyFollowerList from '../components/follower/MyFollowerList';

const HeaderText = styled.p`
	font-weight: 700;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.textColor};
	display: none;
	@media ${({ theme }) => theme.size.mobile} {
		display: block;
	}
`;

const FollowerSection = styled.section`
	max-width: 72rem;
	margin: 3rem auto;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
	padding: 3rem;
	height: 92.7rem;
	@media ${({ theme }) => theme.size.mobile} {
		background-color: ${({ theme }) => theme.bgsubColor};
		margin: 0;
		padding: 1rem;
	}
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.textColor};
	text-align: center;
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 4rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

function FollowerList() {
	return (
		<>
			<FeedHeader>
				<HeaderText>My Follwers</HeaderText>
			</FeedHeader>

			<FollowerSection>
				<Title>My Followers</Title>
				<MyFollowerList />
			</FollowerSection>
		</>
	);
}

export default FollowerList;
