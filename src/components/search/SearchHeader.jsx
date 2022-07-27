import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../constants/index';
import FeedHeader from '../common/header/FeedHeader';
import { SearchInput, SearchForm, SearchBtn } from './SearchHeader.style';

function SearchHeader({ setSearchList }) {
	const navigate = useNavigate();
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
			if (json.status === 404) {
				throw navigate('/errorPage');
			}
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
		if (keyword !== '') {
			searchAPI();
		}
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
				<SearchBtn type="submit">
					<span>검색하기</span>
				</SearchBtn>
			</SearchForm>
		</FeedHeader>
	);
}
export default SearchHeader;
