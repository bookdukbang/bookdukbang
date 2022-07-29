import React from 'react';
import FeedHeader from '../components/common/header/FeedHeader';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProductRegister from '../components/profile/ProductRegister';
import Wrap from '../components/common/Wrap';
import styled from 'styled-components';
import MyFeed from '../components/profile/MyFeed';
import NavigatorMenu from '../components/navigator/NavigatorMenu';

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

function MyProfile() {
	return (
		<>
			<FeedHeader />
			<Wrap>
				<ProfileWrap>
					<DivArray>
						<ProfileInfo />
						<ProductRegister />
					</DivArray>
					<FeedWrap>
						<MyFeed />
					</FeedWrap>
				</ProfileWrap>
			</Wrap>
			<NavigatorMenu />
		</>
	);
}

export default MyProfile;
