import React from 'react';
import styled from 'styled-components';
import Feed from '../components/common/Feed';
import Wrap from '../components/common/Wrap';
import BookList from '../components/Feed/BookList';
import HomeHeader from '../components/Feed/HomeHeader';
import MyFollowers from '../components/Feed/MyFollowers';
import User from '../components/Feed/User';
import NavigatorMenu from '../components/navigator/NavigatorMenu';

const FeedWrap = styled.div`
	display: flex;
	gap: 3rem;
	margin-top: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		justify-content: center;
	}
`;

const MySection = styled.section`
	background-color: lightsteelblue;
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const FollowerFeed = styled.section`
	width: 72rem;
`;

const FollowerAside = styled.aside`
	background-color: lavender;
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

function FeedPage() {
	return (
		<>
			<HomeHeader />
			<Wrap>
				<FeedWrap>
					<MySection>
						<User />
						<BookList />
					</MySection>
					<FollowerFeed>
						<Feed />
						<Feed />
					</FollowerFeed>
					<FollowerAside>
						<MyFollowers />
					</FollowerAside>
				</FeedWrap>
			</Wrap>
			<NavigatorMenu />
		</>
	);
}

export default FeedPage;
