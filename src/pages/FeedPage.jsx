import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowingFeed from '../components/feed/FollowingFeed';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import BookList from '../components/feed/BookList';
import FeedNoFollowers from '../components/feed/FeedNoFollowers';
import MyFollowings from '../components/feed/MyFollowings';
import User from '../components/feed/User';
import NavigatorMenu from '../components/navigator/NavigatorMenu';
import { usePostAxios } from '../hooks/usePostAxios';

const FeedWrap = styled(Wrap)`
	display: flex;
	gap: 3rem;
	margin-top: 3rem;

	@media ${({ theme }) => theme.size.mobile} {
		justify-content: center;
		margin-bottom: 7rem;
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
	&.noFollowers {
		padding: 25rem 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		@media ${({ theme }) => theme.size.mobile} {
			padding: 20rem 0;
		}
	}
`;

const FollowerAside = styled.aside`
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
	@media ${({ theme }) => theme.size.tablet} {
		display: none;
	}
`;

const IrH2 = styled.h2`
	${({ theme }) => theme.a11yHidden()}
`;

function FeedPage() {
	const [FollowingPost, setFollowingPost] = useState(null);
	const { getFeeds } = usePostAxios();

	useEffect(() => {
		getFeeds().then((feedDatas) => {
			setFollowingPost(feedDatas);
		});
	}, []);

	return (
		<>
			<FeedHeader isHome />
			<FeedWrap>
				<MySection>
					<IrH2>My Section</IrH2>
					<User />
					<BookList />
				</MySection>
				{FollowingPost !== null && (
					<FollowerFeed className={FollowingPost.length > 0 ? null : 'noFollowers'}>
						<IrH2>Follower Feed Section</IrH2>
						{FollowingPost.length > 0 ? (
							<FollowingFeed FollowingPost={FollowingPost} />
						) : (
							<FeedNoFollowers />
						)}
					</FollowerFeed>
				)}
				<FollowerAside>
					<MyFollowings />
				</FollowerAside>
			</FeedWrap>
			<NavigatorMenu />
		</>
	);
}

export default FeedPage;
