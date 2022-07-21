import React from 'react';
import styled from 'styled-components';

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

function NoFollowers() {
	return (
		<>
			<MyFollowersWrap>
				<MyFollowersP>MyFollowers</MyFollowersP>
			</MyFollowersWrap>
		</>
	);
}

export default NoFollowers;
