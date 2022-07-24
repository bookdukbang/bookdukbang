import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

function User() {
	const MyImageSrc = JSON.parse(localStorage.getItem('user')).image;
	const MyName = JSON.parse(localStorage.getItem('user')).username;
	const MyAccountName = JSON.parse(localStorage.getItem('user')).accountname;

	return (
		<UserLi>
			<Link to="/myprofile">
				<NoneProfileSmall
					style={{ backgroundImage: `url(${MyImageSrc})` }}
				/>
			</Link>
			<UserInfo>
				{MyName}
				<p>@ {MyAccountName}</p>
			</UserInfo>
		</UserLi>
	);
}

export default User;
