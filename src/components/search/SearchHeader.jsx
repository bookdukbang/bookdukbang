import React, { useEffect, useState } from 'react';
import { useSearchAxios } from '../../hooks/useSearchAxios';
import FeedHeader from '../common/header/FeedHeader';
import { SearchInput, SearchForm, SearchBtn } from './SearchHeader.style';

function SearchHeader({ setSearchList }) {
	const [keyword, setKeyword] = useState('');
	const { searchUser } = useSearchAxios();

	useEffect(() => {
		const reg = /^[0-9a-zA-Zㄱ-힣][0-9a-zA-Zㄱ-힣 ]*$/;
		const iskeyword = reg.test(keyword);
		if (keyword === '' || !iskeyword) {
			setSearchList(null);
		}
	}, [keyword]);

	const onChangeSearch = (event) => {
		setKeyword(event.target.value);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		if (keyword !== '') {
			searchUser(keyword).then((searchData) => {
				setSearchList(searchData);
			});
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
