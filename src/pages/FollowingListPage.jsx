import React from 'react';
import FeedHeader from '../components/common/header/FeedHeader';
import Follwing from '../components/followList/Following';
import {
	HeaderText,
	FollowerSection,
	Title,
} from '../components/followList/FollowList.style';
import NavigatorMenu from '../components/navigator/NavigatorMenu';

function FollowerList() {
	return (
		<>
			<FeedHeader>
				<HeaderText>My Following</HeaderText>
			</FeedHeader>

			<FollowerSection>
				<Title>My Following</Title>
				<ul>
					<Follwing />
				</ul>
			</FollowerSection>
			<NavigatorMenu />
		</>
	);
}

export default FollowerList;
