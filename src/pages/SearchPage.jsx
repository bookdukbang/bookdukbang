import React, { useState } from 'react';
import SearchContainer from '../components/search/SearchContainer';
import SearchHeder from '../components/search/SearchHeder';

function SearchPage() {
	const [searchList, setSearchList] = useState(null);

	return (
		<>
			<SearchHeder setSearchList={setSearchList} />
			<SearchContainer searchList={searchList} />
		</>
	);
}

export default SearchPage;
