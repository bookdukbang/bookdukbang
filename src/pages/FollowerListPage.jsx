import React from 'react';
import FeedHeader from '../components/common/header/FeedHeader';
import Follower from '../components/followList/Follower';
import {
	HeaderText,
	FollowerSection,
	Title,
} from '../components/followList/FollowList.style';

function FollowerList() {
	return (
		<>
			<FeedHeader>
				<HeaderText>My Follwers</HeaderText>
			</FeedHeader>

			<FollowerSection>
				<Title>My Followers</Title>
				<ul>
					<Follower />
				</ul>
			</FollowerSection>
		</>
	);
}

export default FollowerList;
