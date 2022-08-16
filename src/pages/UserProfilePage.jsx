import React from 'react';
import FeedHeader from '../components/common/header/FeedHeader';
import MyProfileInfo from '../components/profile/MyProfileInfo';
import UserProfileInfo from '../components/profile/UserProfileInfo';
import ProductRegister from '../components/profile/ProductRegister';
import { NavigaterWrapping } from '../components/common/Wrap';
import styled from 'styled-components';
import MyFeed from '../components/profile/MyFeed';
import NavigatorMenu from '../components/navigator/NavigatorMenu';
import { useParams } from 'react-router-dom';

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
	const { id } = useParams();
	const myAccountname = JSON.parse(sessionStorage.getItem('user')).accountname;

	return (
		<>
			<FeedHeader />
			<NavigaterWrapping>
				<ProfileWrap>
					<DivArray>
						{myAccountname === id ? <MyProfileInfo /> : <UserProfileInfo />}
						<ProductRegister postId={id} ismyPage={myAccountname === id} />
					</DivArray>
					<FeedWrap>
						<MyFeed postId={id} />
					</FeedWrap>
				</ProfileWrap>
			</NavigaterWrapping>
			<NavigatorMenu />
		</>
	);
}

export default UserProfilePage;
