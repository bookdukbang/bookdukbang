import React from 'react';
import Feed from '../common/feed/Feed';

function FollowingFeed({ FollowingPost }) {
	return (
		<>
			{FollowingPost.map((item) => (
				<Feed key={item.id} item={item} author={item.author} postId={item.id} />
			))}
		</>
	);
}

export default FollowingFeed;
