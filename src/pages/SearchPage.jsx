import React, { useState } from 'react';
import NavigatorMenu from '../components/navigator/NavigatorMenu';
import SearchContainer from '../components/search/SearchContainer';
import SearchHeader from '../components/search/SearchHeader';

function SearchPage() {
	const [searchList, setSearchList] = useState(null);

	return (
		<>
			<SearchHeader setSearchList={setSearchList} />
			<SearchContainer searchList={searchList} />
			<NavigatorMenu />
		</>
	);
}

export default SearchPage;
