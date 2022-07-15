import React, { useEffect, useState } from 'react';
import {
	SearchSection,
	SectionTitle,
	SearchLoadingWrap,
} from './SearchContainer.style';
import SearchCard from './SearchCard';
import Wrap from '../common/Wrap';

function SearchLoading() {
	return (
		<SearchLoadingWrap>
			<h3>결과가 없습니다. :{'('}</h3>
			<p>검색 결과를 찾을 수 없습니다.</p>
		</SearchLoadingWrap>
	);
}

function SearchContainer({ searchList }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (searchList === null || searchList.length === 0) {
			setLoading(true);
		} else {
			setLoading(false);
		}
	}, [searchList]);
	return (
		<Wrap>
			<SearchSection>
				<SectionTitle>검색 결과 리스트</SectionTitle>

				{loading || searchList === null ? (
					<SearchLoading />
				) : (
					<ul>
						{searchList.map((user) => (
							<SearchCard key={user.accountname} user={user} />
						))}
					</ul>
				)}
			</SearchSection>
		</Wrap>
	);
}

export default SearchContainer;
