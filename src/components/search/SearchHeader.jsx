import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants/index';
import FeedHeader from '../common/header/FeedHeader';
import { SearchInput, SearchForm } from './SearchHeader.style';

function SearchHeader({ setSearchList }) {
	const [userInfo, setUserInfo] = useState(null);
	const [keyword, setKeyword] = useState('');

	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem('user')));
	}, []);

	useEffect(() => {
		const reg = /^[0-9a-zA-Zㄱ-힣][0-9a-zA-Zㄱ-힣 ]*$/;
		const iskeyword = reg.test(keyword);
		if (keyword === '' || !iskeyword) {
			setSearchList(null);
		}
	}, [keyword]);

	async function searchAPI() {
		const reqPath = `/user/searchuser/?keyword=${keyword}`;

		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
					'Content-type': 'application/json',
				},
			});

			const json = await res.json();
			setSearchList(json);
		} catch (err) {
			console.error(err);
		}
	}

	const onChangeSearch = (event) => {
		setKeyword(event.target.value);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		searchAPI();
	};

	return (
		<FeedHeader>
			<SearchForm method="GET" onSubmit={onSubmitForm}>
				<label htmlFor="userSearch">유저 계정 검색</label>
				<SearchInput
					type="text"
					name="userSearch"
					id="userSearch"
					placeholder="계정 검색"
					onChange={onChangeSearch}
					value={keyword}
				/>
			</SearchForm>
		</FeedHeader>
	);
}
export default SearchHeader;
