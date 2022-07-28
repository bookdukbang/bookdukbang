import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants';
import Feed from '../common/Feed';

function FollowingFeed() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const [FollowingPost, setFollowingPost] = useState(null);

	async function FollowingFeedList() {
		try {
			const res = await fetch(SERVER_URL + '/post/feed', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const result = await res.json();
			setFollowingPost(result.posts);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		FollowingFeedList();
	}, []);

	return (
		<>
			{FollowingPost !== null &&
				FollowingPost?.map((item) => (
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

export default FollowingFeed;
