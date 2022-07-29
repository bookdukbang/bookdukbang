import styled from 'styled-components';
import React from 'react';
import User from '../common/user/User';

const SearchCardLi = styled.li`
	padding: 1rem 1.5rem;
	border-radius: 1rem;
	& + li {
		margin-top: 1rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		background-color: ${({ theme }) => theme.bgMainColor};
	}
`;

function SearchCard({ user }) {
	return (
		<SearchCardLi>
			<User author={user} />
		</SearchCardLi>
	);
}

export default SearchCard;
