import React from 'react';
import styled, { css } from 'styled-components';
import HeaderLogo from '../../assets/HeaderLogo.png';
import Profile from '../../assets/profile.png';
import PostingIcon from '../../assets/PostingIcon.png';
import LogoutIcon from '../../assets/LogoutIcon.png';
import Wrap from './Wrap';
import BackIcon from '../../assets/arrowLeft.png';
import MoreIcon from '../../assets/moreBtn.png';

const HeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 2.7rem 0;
	@media ${({ theme }) => theme.size.tablet} {
		padding: 1.8rem 0;
	}
`;

const FeedHeaderWrap = styled(Wrap)`
	display: flex;
	gap: 0 2.5rem;
	align-items: center;
	justify-content: space-between;
	@media ${({ theme }) => theme.size.tablet} {
		padding: 0 1em;
		gap: 0 1.5rem;
	}
`;

const LogoWrap = styled.h1`
	width: 21.5rem;

	& img {
		width: 100%;
		height: 100%;
	}

	@media ${({ theme }) => theme.size.mobile} {
		width: 11.6rem;
		display: ${({ isHome }) => (isHome ? 'block' : 'none')};
	}
`;

const MobileBtn = css`
	display: none;
	width: 2.4rem;
	height: 2.4rem;
	border: none;
	background-color: transparent;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 2.4rem;

	& span {
		${({ theme }) => theme.a11yHidden()};
	}
`;

const BackBtn = styled.button`
	${MobileBtn}
	background-image: url(${BackIcon});

	@media ${({ theme }) => theme.size.mobile} {
		display: ${({ isHome }) => (isHome ? 'none' : 'block')};
	}
`;

const MoreBtn = styled.button`
	${MobileBtn}
	background-image: url(${MoreIcon});
	@media ${({ theme }) => theme.size.mobile} {
		display: block;
	}
`;

const HeaderUl = styled.ul`
	display: flex;
	gap: 0 2.5rem;
	@media ${({ theme }) => theme.size.tablet} {
		gap: 0 0.5rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
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

	& span {
		margin-left: 1rem;
	}

	@media ${({ theme }) => theme.size.tablet} {
		width: 4.7rem;
		border-radius: 5rem;
		& span {
			${({ theme }) => theme.a11yHidden()};
		}
	}
`;

const HeaderPosting = styled(HeaderBtnLogout)`
	background-color: ${({ theme }) => theme.mainColor};
`;

const ProfileImg = styled.img`
	border: 1px solid ${({ theme }) => theme.grayColor4};
	background-color: ${({ theme }) => theme.grayColor4};
	border-radius: 50rem;
	box-sizing: border-box;

	width: 5rem;
`;

const PostingImg = styled.img`
	width: 1.9rem;
`;

const LogoutImg = styled.img`
	width: 2.1rem;
`;

function FeedHeader({ children, isHome }) {
	return (
		<HeaderStyle>
			<Wrap>
				<FeedHeaderWrap>
					<LogoWrap isHome={isHome}>
						<a href="/">
							<img src={HeaderLogo} alt="북덕방" />
						</a>
					</LogoWrap>
					<BackBtn type="button" isHome={isHome}>
						<span>뒤로가기</span>
					</BackBtn>
					{children}
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
					<MoreBtn type="button">
						<span>더보기 버튼</span>
					</MoreBtn>
				</FeedHeaderWrap>
			</Wrap>
		</HeaderStyle>
	);
}

export default FeedHeader;
