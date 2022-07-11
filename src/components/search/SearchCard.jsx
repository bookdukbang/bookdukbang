import React from 'react';
import {
	SearchCardLi,
	UserLink,
	UserProfileImg,
	UserName,
	UserAccount,
} from './SearchCard.style';

function SearchCard({ user }) {
	const userLink = `/profile/${user.accountname}`;
	return (
		<SearchCardLi>
			<UserLink to={userLink}>
				<UserProfileImg src={user['image']} alt={user.username} />
				<UserName>{user.username}</UserName>
				<UserAccount>{user.accountname}</UserAccount>
			</UserLink>
		</SearchCardLi>
	);
}

export default SearchCard;
