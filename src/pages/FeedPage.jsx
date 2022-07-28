import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FollowingFeed from '../components/feed/FollowingFeed';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import BookList from '../components/feed/BookList';
import FeedNoFollowers from '../components/feed/FeedNoFollowings';
import MyFollowings from '../components/feed/MyFollowings';
import User from '../components/feed/User';
import NavigatorMenu from '../components/navigator/NavigatorMenu';
import { SERVER_URL } from '../constants';

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
`;

const IrH2 = styled.h2`
	${({ theme }) => theme.a11yHidden()}
`;

function FeedPage() {
	const [isFollowing, setIsFollowing] = useState(false);
	const token = JSON.parse(localStorage.getItem('user')).token;

	async function Feedlist() {
		try {
			const response = await fetch(SERVER_URL + '/post/feed', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const result = await response.json();
			if (result.posts.length === 0) {
				setIsFollowing(false);
			} else {
				setIsFollowing(true);
			}
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		Feedlist();
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
				{!isFollowing && (
					<FollowerFeed className="noFollowers">
						<IrH2>Follower Feed Section</IrH2>

						<FeedNoFollowers />
					</FollowerFeed>
				)}
				{isFollowing && (
					<FollowerFeed>
						<IrH2>Follower Feed Section</IrH2>
						<FollowingFeed />
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
