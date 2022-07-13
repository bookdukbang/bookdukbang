import React from 'react';
import FeedHeader from '../components/Common/FeedHeader';
import ProfileInfo from '../components/Profile/ProfileInfo';
import ProductRegister from '../components/Profile/ProductRegister';
import Feed from '../components/Feed';
import Wrap from '../components/Common/Wrap';
import styled from 'styled-components';

const ProfileWrap = styled(Wrap)`
	display: flex;
	justify-content: space-between;
	gap: 3rem;
	margin-top: 3rem;
`;
const DivArray = styled.div`
	display: inline-flex;
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
