import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MediumBtn, MediumBtnDiv } from '../common/Button.style';
import User from './User';

const MyFollowersWrap = styled.div`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 3rem 0 5rem;
	border-radius: 1rem;
`;

const MyFollowersP = styled.p`
	font-size: 2rem;
	font-weight: 700;
	margin: 0 0 3rem 2rem;
`;

const MediumBtnUserSearch = styled(MediumBtn)`
	text-align: center;
`;

function MyFollowers() {
	return (
		<>
			<MyFollowersWrap>
				<MyFollowersP>MyFollowers</MyFollowersP>
				<ul>
					<User />
					<User />
					<User />
					<User />
					<User />
				</ul>
			</MyFollowersWrap>
			<MediumBtnDiv>
				<MediumBtnUserSearch as={Link} to="/search">
					유저 검색 하기
				</MediumBtnUserSearch>
			</MediumBtnDiv>
		</>
	);
}

export default MyFollowers;
