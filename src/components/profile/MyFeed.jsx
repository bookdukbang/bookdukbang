import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants';
import Feed from '../common/Feed';

function MyFeed() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const myAccountName = JSON.parse(localStorage.getItem('user')).accountname;
	const [feeds, setFeeds] = useState(null);

	useEffect(() => {
		myFeeds();
	}, []);

	async function myFeeds() {
		try {
			const feedRes = await fetch(
				SERVER_URL + `/post/${myAccountName}/userpost`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
			const feedResult = await feedRes.json();
			setFeeds(feedResult.post);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			{feeds !== null &&
				feeds?.map((item) => (
					<Feed
						key={item.id}
						item={item}
						author={item.author}
						postId={item.id}
					/>
				))}
		</>
	);
}

export default MyFeed;
