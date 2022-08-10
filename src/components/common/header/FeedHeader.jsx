import React, { useContext } from 'react';
import HeaderLogoLight from '../../../assets/HeaderLogo.png';
import HeaderLogoDark from '../../../assets/logo_dark.png';
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
import { ThemeModeContext } from '../../../context/ThemeModeContext';

function FeedHeader({ children, isHome }) {
	const { mode } = useContext(ThemeModeContext);
	const navigate = useNavigate();
	const onClickLogout = () => {
		window.sessionStorage.removeItem('user');
		navigate('/');
	};
	const MyImageSrc = JSON.parse(sessionStorage.getItem('user')).image;
	const onClickBack = () => {
		navigate(-1);
	};

	return (
		<HeaderStyle>
			<FeedHeaderWrap>
				<LogoWrap isHome={isHome}>
					<Link to="/feed">
						{mode === 'light' ? (
							<LogoImg src={HeaderLogoLight} alt="북덕방" />
						) : (
							<LogoImg src={HeaderLogoDark} alt="북덕방" />
						)}
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
