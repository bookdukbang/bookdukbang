import React from 'react';
import styled from 'styled-components';
import Feed from '../components/common/Feed';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import BookList from '../components/Feed/BookList';
import MyFollowers from '../components/Feed/MyFollowers';
import User from '../components/Feed/User';
import NavigatorMenu from '../components/navigator/NavigatorMenu';

const FeedWrap = styled(Wrap)`
	display: flex;
	gap: 3rem;
	margin-top: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		justify-content: center;
	}
`;

const MySection = styled.section`
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const FollowerFeed = styled.section`
	width: 72rem;
`;

const FollowerAside = styled.aside`
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const IrH2 = styled.h2`
	${({ theme }) => theme.a11yHidden()}
`;

function FeedPage() {
	return (
		<>
			<FeedHeader isHome />
			<FeedWrap>
				<MySection>
					<IrH2>My Section</IrH2>
					<User />
					<BookList />
				</MySection>
				<FollowerFeed>
					<IrH2>Follower Feed Section</IrH2>
					<Feed />
					<Feed />
				</FollowerFeed>
				<FollowerAside>
					<MyFollowers />
				</FollowerAside>
			</FeedWrap>
			<NavigatorMenu />
		</>
	);
}

export default FeedPage;
