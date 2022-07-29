import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SERVER_URL } from '../../constants';
import { NoneProfileSmall } from '../common/user/UserUpload';

const UserLi = styled.li`
	display: flex;
	background-color: ${({ theme }) => theme.whiteColor};
	border-radius: 1rem;
	padding: 2rem;
`;

const UserInfo = styled.h2`
	font-weight: 700;
	font-size: 2rem;

	& p {
		font-weight: 300;
		font-size: 1.6rem;
		color: ${({ theme }) => theme.grayColor2};
	}
`;

function UserFollowing() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const MyAccountName = JSON.parse(localStorage.getItem('user')).accountname;
	const [Following, setFollowing] = useState(null);

	async function UserFollowingList() {
		try {
			const res = await fetch(
				SERVER_URL + `/profile/${MyAccountName}/following`,
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
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		UserFollowingList();
	}, []);

	return (
		<>
			{Following !== null &&
				Following?.map((item) => (
					<UserLi key={item._id}>
						<Link
							to={`/user/${item.accountname}`}
							state={{ userId: item.accountname }}
						>
							<NoneProfileSmall
								style={{
									backgroundImage: `url(${item.image})`,
								}}
							/>
						</Link>
						<UserInfo>
							{item.username}
							<p>@ {item.accountname}</p>
						</UserInfo>
					</UserLi>
				))}
		</>
	);
}

export default UserFollowing;
