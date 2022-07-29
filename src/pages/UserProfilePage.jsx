import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../components/common/Feed';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import NavigatorMenu from '../components/navigator/NavigatorMenu';
import UserProductRegister from '../components/profile/UserProductRegister';
import UserProfileInfo from '../components/profile/UserProfileInfo';
import { SERVER_URL } from '../constants';

const ProfileWrap = styled.div`
	display: flex;
	justify-content: center;
	gap: 3rem;
	margin-top: 4rem;
	flex-wrap: wrap;
`;
const DivArray = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 65rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 37rem;
	}
`;

const FeedWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 72rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.bgsubColor};
	@media ${({ theme }) => theme.size.mobile} {
		width: 37rem;
	}
`;

function UserProfilePage() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const location = useLocation();
	const data = location.state.userId;
	const [feeds, setFeeds] = useState(null);
	useEffect(() => {
		userFeeds();
	}, []);
	async function userFeeds() {
		try {
			const feedRes = await fetch(SERVER_URL + `/post/${data}/userpost`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const feedResult = await feedRes.json();
			setFeeds(feedResult.post);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<>
			<FeedHeader />
			<Wrap>
				<ProfileWrap>
					<DivArray>
						<UserProfileInfo />
						<UserProductRegister />
					</DivArray>
					<FeedWrap>
						{feeds !== null &&
							feeds?.map((item) => (
								<Feed
									key={item.id}
									item={item}
									author={item.author}
									postId={item.id}
								/>
							))}
					</FeedWrap>
				</ProfileWrap>
			</Wrap>
			<NavigatorMenu />
		</>
	);
}

export default UserProfilePage;
