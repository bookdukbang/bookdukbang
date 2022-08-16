import React, { useEffect, useState } from 'react';
import { usePostAxios } from '../../hooks/usePostAxios';
import Feed from '../common/feed/Feed';

function MyFeed({ postId }) {
	const { getMyFeeds } = usePostAxios();
	const [feeds, setFeeds] = useState(null);

	useEffect(() => {
		getMyFeeds(postId).then((feedResult) => {
			setFeeds(feedResult);
		});
	}, [postId]);

	return (
		<>
			{feeds !== null &&
				feeds?.map((item) => <Feed key={item.id} item={item} author={item.author} />)}
		</>
	);
}

export default MyFeed;
