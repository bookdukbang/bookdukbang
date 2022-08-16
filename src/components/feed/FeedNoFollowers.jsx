import React from 'react';
import styled from 'styled-components';
import { MediumBtn, MediumBtnDiv } from '../common/Button.style';
import noneBookLogo from '../../assets/none-bookLogo.png';
import { Link } from 'react-router-dom';

const NoneBookLogoImg = styled.img`
	width: 12.3rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 8rem;
	}
`;

const NoUsersText = styled.p`
	font-weight: 700;
	font-size: 3.6rem;
	color: ${({ theme }) => theme.grayColor2};
	margin: 2rem 0 0.5rem;
	word-break: keep-all;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 24px;
	}
`;

const NoUsersComment = styled.p`
	font-weight: 400;
	font-size: 2rem;
	color: ${({ theme }) => theme.grayColor2};
	word-break: keep-all;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 16px;
	}
`;

const MediumBtnDivSearch = styled(MediumBtnDiv)`
	margin: 0 auto;
`;

const MediumBtnUserSearch = styled(MediumBtn)`
	text-align: center;
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 17rem;
		padding: 1rem 2.5rem;
	}
`;

function FeedNoFollowers() {
	return (
		<>
			<NoneBookLogoImg src={noneBookLogo} alt="" />
			<NoUsersText>팔로우한 유저가 없습니다.</NoUsersText>
			<NoUsersComment>
				다양한 유저들을 팔로우하고 <br /> 새로운 이야기를 공유해보세요!
			</NoUsersComment>
			<MediumBtnDivSearch>
				<MediumBtnUserSearch as={Link} to="/search">
					유저 검색 하기
				</MediumBtnUserSearch>
			</MediumBtnDivSearch>
		</>
	);
}

export default FeedNoFollowers;
