import React, { useEffect, useState } from 'react';
import { NoneProfileSmall } from '../common/user/UserUpload';
import { useParams } from 'react-router-dom';
import { UserLi, FollowingBtn, FollowBtn, UserInfo } from './FollowList.style';
import { Link } from 'react-router-dom';
import { useFollowAxios } from '../../hooks/useFollowAxios';

function Followings() {
	const { getFollowingList, followUser, unfollowUser } = useFollowAxios();

	const { id } = useParams();
	const [Following, setFollowing] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getFollowingList(id).then((followerData) => {
			setFollowing(followerData);
		});
	}, []);

	useEffect(() => {
		if (isLoading) {
			getFollowingList(id).then((followerData) => {
				setFollowing(followerData);
			});
			setIsLoading(false);
		}
	}, [isLoading]);

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

export default Followings;
