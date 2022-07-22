import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
const UserLink = styled(Link)`
	&::after {
		clear: both;
		content: '';
		display: block;
	}
`;
function SearchCard({ user }) {
	const userLink = `/user/${user.accountname}`;
	return (
		<SearchCardLi>
			<UserLink to={userLink}>
				<User author={user} />
			</UserLink>
		</SearchCardLi>
	);
}

export default SearchCard;
