import React, { useEffect, useState } from 'react';
import { SERVER_URL, USER_TOKEN } from '../constants';
import {
	SedarchHeaderStyle,
	SearchInput,
	SearchForm,
} from './Searchheder.style';

function SearchHeder({ setSearchList }) {
	const [keyword, setKeyword] = useState('');

	async function searchAPI() {
		const reqPath = `/user/searchuser/?keyword=${keyword}`;

		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${USER_TOKEN}`,
					'Content-type': 'application/json',
				},
			});

			const json = await res.json();
			setSearchList(json);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		const reg = /^[0-9a-zA-Zㄱ-힣][0-9a-zA-Zㄱ-힣 ]*$/;
		const iskeyword = reg.test(keyword);

		if (keyword === '' || !iskeyword) {
			setSearchList(null);
		} else {
			searchAPI();
		}
	}, [keyword]);

	const onChangeSearch = (event) => {
		setKeyword(event.target.value);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
	};

	return (
		<SedarchHeaderStyle>
			<SearchForm action="" onSubmit={onSubmitForm}>
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
		</SedarchHeaderStyle>
	);
}
export default SearchHeder;
