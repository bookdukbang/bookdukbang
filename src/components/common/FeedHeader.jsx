import React from 'react';
import styled from 'styled-components';
import HeaderLogo from '../../assets/HeaderLogo.png';
import Profile from '../../assets/profile.png';
import PostingIcon from '../../assets/PostingIcon.png';
import LogoutIcon from '../../assets/LogoutIcon.png';
import Wrap from './Wrap';

const HeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 2.7rem 0;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const FeedHeaderWrap = styled(Wrap)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 2.5rem;
`;

const HeaderBtnLogout = styled.button`
	background-color: ${({ theme }) => theme.grayColor4};
	display: flex;
	border-radius: 0.5rem;
	width: 12rem;
	color: ${({ theme }) => theme.whiteColor};
	font-weight: 700;
	font-size: 16px;
	justify-content: center;
	padding: 1.4rem 0;
	line-height: 1;
	border: none;
`;

const HeaderPosting = styled(HeaderBtnLogout)`
	background-color: ${({ theme }) => theme.mainColor};
`;

const LogoImg = styled.img`
	width: 21.5rem;
`;

const ProfileImg = styled.img`
	width: 5rem;
`;

const PostingImg = styled.img`
	width: 1.9rem;
	margin-right: 1rem;
`;

const LogoutImg = styled.img`
	width: 2.1rem;
	margin-right: 0.9rem;
`;

function FeedHeader() {
	return (
		<HeaderStyle>
			<FeedHeaderWrap>
				<h1>
					<a href="/">
						<LogoImg src={HeaderLogo} alt="북덕방" />
					</a>
				</h1>

				<HeaderUl>
					<li>
						<a href="/">
							<ProfileImg src={Profile} alt="프로필" />
						</a>
					</li>
					<li>
						<HeaderPosting as="a" href="/">
							<PostingImg src={PostingIcon} alt="포스팅" />
							<span>Posting</span>
						</HeaderPosting>
					</li>
					<li>
						<HeaderBtnLogout>
							<LogoutImg src={LogoutIcon} alt="로그아웃" />
							<span>Logout</span>
						</HeaderBtnLogout>
					</li>
				</HeaderUl>
			</FeedHeaderWrap>
		</HeaderStyle>
	);
}

export default FeedHeader;
