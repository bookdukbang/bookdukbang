import React from 'react';
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
	return (
		<UserLi>
			<NoneProfileSmall />
			<UserInfo>
				애월읍 위니브 감귤농장
				<p>@ weniv_Mandarin</p>
			</UserInfo>
		</UserLi>
	);
}

export default User;