import React from 'react';
import FeedHeader from '../components/common/header/FeedHeader';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProductRegister from '../components/profile/ProductRegister';
import Feed from '../components/common/Feed';
import Wrap from '../components/common/Wrap';
import styled from 'styled-components';

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
	@media ${({ theme }) => theme.size.mobile} {
		width: 37rem;
	}
`;

const FeedWrap = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 72rem;
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
						<Feed />
						<Feed />
					</FeedWrap>
				</ProfileWrap>
			</Wrap>
		</>
	);
}

export default MyProfile;
