import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/header/FeedHeader';
import Wrap from '../components/common/Wrap';
import BookList from '../components/Feed/BookList';
import NoFollowers from '../components/Feed/NoFollowers';
import User from '../components/Feed/User';
import NavigatorMenu from '../components/navigator/NavigatorMenu';
import noneBookLogo from '../assets/none-bookLogo.png';
import { MediumBtn, MediumBtnDiv } from '../components/common/Button.style';
import { Link } from 'react-router-dom';

const FeedWrap = styled(Wrap)`
	display: flex;
	gap: 3rem;
	margin-top: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		justify-content: center;
	}
`;

const MySection = styled.section`
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const FollowerFeed = styled.section`
	width: 72rem;
	padding: 25rem 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 20rem 0;
	}
`;

const FollowerAside = styled.aside`
	width: 31rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const IrH2 = styled.h2`
	${({ theme }) => theme.a11yHidden()}
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

function FeedPageNoFollowers() {
	return (
		<>
			<FeedHeader isHome />
			<FeedWrap>
				<MySection>
					<IrH2>My Section</IrH2>
					<User />
					<BookList />
				</MySection>
				<FollowerFeed>
					<IrH2>Follower Feed Section</IrH2>
					<NoneBookLogoImg src={noneBookLogo} alt="" />
					<NoUsersText>팔로우한 유저가 없습니다.</NoUsersText>
					<NoUsersComment>
						다양한 유저들을 팔로우하고 <br /> 새로운 이야기를
						공유해보세요!
					</NoUsersComment>
					<MediumBtnDivSearch>
						<MediumBtnUserSearch as={Link} to="/search">
							유저 검색 하기
						</MediumBtnUserSearch>
					</MediumBtnDivSearch>
				</FollowerFeed>
				<FollowerAside>
					<NoFollowers />
				</FollowerAside>
			</FeedWrap>
			<NavigatorMenu />
		</>
	);
}

export default FeedPageNoFollowers;
