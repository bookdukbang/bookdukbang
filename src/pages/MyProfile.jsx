import React from 'react';
import FeedHeader from '../components/common/FeedHeader';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProductRegister from '../components/profile/ProductRegister';
import Feed from '../components/common/Feed';
import Wrap from '../components/common/Wrap';
import styled from 'styled-components';

const ProfileWrap = styled(Wrap)`
	display: flex;
	justify-content: space-between;
	gap: 3rem;
	margin-top: 3rem;
`;
const DivArray = styled.div`
	display: flex;
	flex-direction: column;
`;

function MyProfile() {
	return (
		<>
			<FeedHeader />
			<ProfileWrap>
				<DivArray>
					<ProfileInfo />
					<ProductRegister />
				</DivArray>
				<Feed />
			</ProfileWrap>
		</>
	);
}

export default MyProfile;
