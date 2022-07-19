import React from 'react';
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

function MyFollowers() {
	return (
		<>
			<MyFollowersWrap>
				<MyFollowersP>MyFollowers</MyFollowersP>
				<User />
				<User />
				<User />
				<User />
				<User />
			</MyFollowersWrap>
			<MediumBtnDiv>
				<MediumBtn type="button">유저 검색 하기</MediumBtn>
			</MediumBtnDiv>
		</>
	);
}

export default MyFollowers;
