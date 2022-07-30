import React from 'react';
import HeaderLogo from '../../../assets/HeaderLogo.png';
import PostingIcon from '../../../assets/PostingIcon.png';
import LogoutIcon from '../../../assets/LogoutIcon.png';
import { Link, useNavigate } from 'react-router-dom';
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
	HeaderBtnLogout,
	BtnWrap,
} from './FeedHeader.style';
import DarkModeBtn from '../../darkmode/DarkModeBtn';

function FeedHeader({ children, isHome }) {
	const navigate = useNavigate();
	const onClickLogout = () => {
		window.localStorage.removeItem('user');
		navigate('/');
	};
	const MyImageSrc = JSON.parse(localStorage.getItem('user')).image;
	const onClickBack = () => {
		navigate(-1);
	};

	return (
		<HeaderStyle>
			<FeedHeaderWrap>
				<LogoWrap isHome={isHome}>
					<Link to="/feed">
						<LogoImg src={HeaderLogo} alt="북덕방" />
					</Link>
				</LogoWrap>
				<BackBtn type="button" isHome={isHome} onClick={onClickBack}>
					<span>뒤로가기</span>
				</BackBtn>
				{children}
				<HeaderUl>
					<li>
						<Link to="/myprofile">
							<ProfileImg src={MyImageSrc} alt="프로필" />
						</Link>
					</li>
					<li>
						<HeaderPosting as={Link} to="/postUpload">
							<PostingImg
								src={PostingIcon}
								alt="포스팅 작성하기"
							/>
							<span>Posting</span>
						</HeaderPosting>
					</li>
					<li>
						<HeaderBtnLogout onClick={onClickLogout}>
							<LogoutImg src={LogoutIcon} alt="로그아웃" />
							<span>Logout</span>
						</HeaderBtnLogout>
					</li>
				</HeaderUl>
				<BtnWrap>
					<DarkModeBtn isMain={false} />
					<MoreBtn type="button" onClick={onClickLogout}>
						<span>로그아웃 버튼</span>
					</MoreBtn>
				</BtnWrap>
			</FeedHeaderWrap>
		</HeaderStyle>
	);
}

export default FeedHeader;
