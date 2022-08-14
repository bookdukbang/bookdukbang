import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostAxios } from '../../hooks/usePostAxios';
import Feed from '../common/feed/Feed';

function MyFeed() {
	const { id } = useParams();
	const { getMyFeeds } = usePostAxios();
	const [feeds, setFeeds] = useState(null);

	useEffect(() => {
		getMyFeeds(id).then((feedResult) => {
			setFeeds(feedResult);
		});
	}, []);

	return (
		<>
			{feeds !== null &&
				feeds?.map((item) => <Feed key={item.id} item={item} author={item.author} />)}
		</>
	);
}

export default MyFeed;
