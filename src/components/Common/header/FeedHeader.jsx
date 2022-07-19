import React from 'react';
import HeaderLogo from '../../assets/HeaderLogo.png';
import Profile from '../../assets/profile.png';
import PostingIcon from '../../assets/PostingIcon.png';
import LogoutIcon from '../../assets/LogoutIcon.png';
import { Link } from 'react-router-dom';
import {
	HeaderStyle,
	FeedHeaderWrap,
	LogoWrap,
	LogoImg,
	BackBtn,
	MoreBtn,
	HeaderUl,
	HeaderPosting,
	ProfileImg,
	PostingImg,
	LogoutImg,
} from './FeedHeader.jsx.style';

function FeedHeader({ children, isHome }) {
	return (
		<HeaderStyle>
			<FeedHeaderWrap>
				<LogoWrap isHome={isHome}>
					<Link href="/">
						<LogoImg src={HeaderLogo} alt="북덕방" />
					</Link>
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
		</HeaderStyle>
	);
}

export default FeedHeader;
