import { SERVER_URL } from '../../constants';
import { SmallBtn } from '../common/Button.style';
import styled from 'styled-components';
import React from 'react';

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
	const token = JSON.parse(sessionStorage.getItem('user')).token;

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
			setIsfollow(result.profile.isfollow);
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
			setIsfollow(result.profile.isfollow);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			{isfollow ? (
				<FollowingBtn
					type="button"
					onClick={() => UnFollow(accountname)}
				>
					팔로잉
				</FollowingBtn>
			) : (
				<FollowBtn type="button" onClick={() => Follow(accountname)}>
					팔로우
				</FollowBtn>
			)}
		</>
	);
}

export default UserFollowBtn;
