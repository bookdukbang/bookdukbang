import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants';
import { NoneProfileSmall } from '../common/user/UserUpload';
import { useParams } from 'react-router-dom';
import { UserLi, FollowingBtn, FollowBtn, UserInfo } from './FollowList.style';
import { Link } from 'react-router-dom';

function Followings() {
	const token = JSON.parse(sessionStorage.getItem('user')).token;

	const { id } = useParams();
	const [Following, setFollowing] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isLoading) {
			UserFollowingList();
			setIsLoading(false);
		}
	}, [isLoading]);

	// 팔로잉 리스트 (내가 팔로우한 사용자 목록)
	async function UserFollowingList() {
		try {
			const res = await fetch(
				SERVER_URL + `/profile/${id}/following?limit=30`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
			const result = await res.json();
			setFollowing(result);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		UserFollowingList();
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
			setIsLoading(true);
			return result;
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
			setIsLoading(true);
			return result;
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			{Following !== null &&
				Following.map((item) => (
					<UserLi key={item._id}>
						<Link to={`/user/${item.accountname}`}>
							<NoneProfileSmall
								style={{
									backgroundImage: `url(${item.image})`,
								}}
							/>
						</Link>
						<UserInfo>
							{item.username}
							<span>@ {item.accountname}</span>
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

export default Followings;
