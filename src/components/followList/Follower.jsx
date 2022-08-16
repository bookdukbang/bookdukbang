import React, { useEffect, useState } from 'react';
import { NoneProfileSmall } from '../common/user/UserUpload';
import { UserLi, UserInfo, FollowBtn, FollowingBtn } from './FollowList.style';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFollowAxios } from '../../hooks/useFollowAxios';

function Followers() {
	const { getFollowerList, followUser, unfollowUser } = useFollowAxios();
	const { id } = useParams();
	const [Follower, setFollower] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getFollowerList(id).then((followerData) => {
			setFollower(followerData);
		});
	}, []);

	useEffect(() => {
		if (isLoading) {
			getFollowerList(id).then((followerData) => {
				setFollower(followerData);
			});
			setIsLoading(false);
		}
	}, [isLoading]);

	return (
		<>
			{Follower !== null &&
				Follower.map((item) => (
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
								onClick={() =>
									unfollowUser(item.accountname).then(() => {
										setIsLoading(true);
									})
								}
							>
								팔로잉
							</FollowingBtn>
						) : (
							<FollowBtn
								type="button"
								onClick={() =>
									followUser(item.accountname).then(() => {
										setIsLoading(true);
									})
								}
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
