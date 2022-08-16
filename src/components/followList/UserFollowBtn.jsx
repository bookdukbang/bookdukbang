import { SmallBtn } from '../common/Button.style';
import styled from 'styled-components';
import React from 'react';
import { useFollowAxios } from '../../hooks/useFollowAxios';

const FollowBtn = styled(SmallBtn)`
	width: 25vmin;
	padding: 1.3rem 0;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 0.7rem 0;
	}
`;

const FollowingBtn = styled(SmallBtn)`
	width: 25vmin;
	padding: 1.3rem 0;
	background-color: ${({ theme }) => theme.bgMainColor};
	color: ${({ theme }) => theme.mainColor};
	border: 0.1rem solid ${({ theme }) => theme.mainColor};
	@media ${({ theme }) => theme.size.mobile} {
		padding: 0.7rem 0;
	}
`;

function UserFollowBtn({ accountname, isfollow, setIsfollow }) {
	const { followUser, unfollowUser } = useFollowAxios();

	return (
		<>
			{isfollow ? (
				<FollowingBtn
					type="button"
					onClick={() =>
						unfollowUser(accountname).then((followData) => {
							setIsfollow(followData.profile.isfollow);
						})
					}
				>
					팔로잉
				</FollowingBtn>
			) : (
				<FollowBtn
					type="button"
					onClick={() =>
						followUser(accountname).then((followData) => {
							setIsfollow(followData.profile.isfollow);
						})
					}
				>
					팔로우
				</FollowBtn>
			)}
		</>
	);
}

export default UserFollowBtn;
