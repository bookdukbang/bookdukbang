import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants';
import { NoneProfileSmall } from '../common/user/UserUpload';
import {
	UserLi,
	UserInfo,
	FollowBtn,
	FollowingBtn,
} from '../followList/FollowList.style';

function Followers() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const AccountName = JSON.parse(localStorage.getItem('user')).accountname;

	const [Follower, setFollower] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			UserFollowerList();
			setIsLoading(false);
		}
	}, [isLoading]);

	// 팔로워 리스트 (나를 팔로우한 사용자 목록)
	async function UserFollowerList() {
		try {
			const res = await fetch(
				SERVER_URL + `/profile/${AccountName}/follower?limit=30`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
			const result = await res.json();
			setFollower(result);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		UserFollowerList();
	}, []);

	// 팔로우
	async function Follow(useraccount) {
		try {
			const res = await fetch(
				SERVER_URL + `/profile/${useraccount}/follow`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
			const result = await res.json();
			console.log(result);
			setIsLoading(true);
		} catch (error) {
			console.error(error);
		}
	}

	// 언팔로우
	async function UnFollow(useraccount) {
		try {
			const res = await fetch(
				SERVER_URL + `/profile/${useraccount}/unfollow`,
				{
					method: 'DELETE',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
			const result = await res.json();
			console.log(result);
			setIsLoading(true);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			{Follower !== null &&
				Follower.map((item, i) => (
					<UserLi key={i}>
						<NoneProfileSmall
							style={{
								backgroundImage: `url(${item.image})`,
							}}
						/>
						<UserInfo>
							{item.username}
							<p>@ {item.accountname}</p>
						</UserInfo>

						{item.isfollow ? (
							<FollowingBtn
								type="button"
								onClick={() => UnFollow(item.accountname)}
							>
								팔로잉
							</FollowingBtn>
						) : (
							<FollowBtn
								type="button"
								onClick={() => Follow(item.accountname)}
							>
								팔로우
							</FollowBtn>
						)}
					</UserLi>
				))}
		</>
	);
}

export default Followers;
