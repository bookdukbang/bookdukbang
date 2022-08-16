import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useFollowAxios } from '../../hooks/useFollowAxios';
import { NoneProfileSmall } from '../common/user/UserUpload';

const UserLi = styled.li`
	display: flex;
	background-color: ${({ theme }) => theme.bgMainColor};
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
	const MyAccountName = JSON.parse(sessionStorage.getItem('user')).accountname;
	const [Following, setFollowing] = useState(null);
	const { getFollowingList } = useFollowAxios();

	useEffect(() => {
		getFollowingList(MyAccountName).then((followingList) => {
			setFollowing(followingList);
		});
	}, []);

	return (
		<>
			{Following !== null &&
				Following?.map((item) => (
					<UserLi key={item._id}>
						<Link to={`/user/${item.accountname}`} state={{ userId: item.accountname }}>
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
