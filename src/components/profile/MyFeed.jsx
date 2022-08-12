import React, { useEffect, useState } from 'react';
import { usePostAxios } from '../../hooks/usePostAxios';
import Feed from '../common/feed/Feed';

function MyFeed() {
	const myAccountName = JSON.parse(sessionStorage.getItem('user')).accountname;
	const { getMyFeeds } = usePostAxios();
	const [feeds, setFeeds] = useState(null);

	useEffect(() => {
		getMyFeeds(myAccountName).then((feedResult) => {
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
