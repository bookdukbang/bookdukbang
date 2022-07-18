import React from 'react';
import styled from 'styled-components';
import NoneProfile from '../../../assets/profile.png';

const UserProfileImg = styled.img`
	border-radius: 50rem;
	border: 1px solid ${({ theme }) => theme.grayColor4};
	width: 5.2rem;
	height: 5.2rem;
	box-sizing: border-box;
	float: left;
	margin-right: 1rem;
	background-color: ${({ theme }) => theme.grayColor4};

	@media ${({ theme }) => theme.size.mobile} {
		width: 4rem;
		height: 4rem;
		margin-right: 7px;
	}
`;

const UserName = styled.p`
	font-size: 2rem;
	grid-column: 2 / 3;
	font-weight: 700;

	& span {
		display: block;
		color: ${({ theme }) => theme.grayColor2};
		font-size: 1.6rem;
		font-weight: 300;
	}

	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
		& span {
			font-size: 1.4rem;
		}
	}
`;

function User({ profileUrl, userName, accoutName }) {
	if (!profileUrl) {
		profileUrl = NoneProfile;
	}
	if (!userName) {
		userName = '(알수없음)';
	}
	if (!accoutName) {
		accoutName = 'none_account';
	}

	return (
		<>
			<UserProfileImg src={profileUrl} alt={userName} />
			<UserName>
				{userName} <span>{accoutName}</span>
			</UserName>
		</>
	);
}
export default User;
