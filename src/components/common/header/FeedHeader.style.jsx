import styled, { css } from 'styled-components';
import Wrap from '../Wrap';
import BackIcon from '../../../assets/arrowLeft.png';
// import MoreIcon from '../../../assets/moreBtn.png';
import LogoutIcon from '../../../assets/LogoutIcon.png';

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
		gap: 0 1.5rem;
	}
`;

const LogoWrap = styled.h1`
	@media ${({ theme }) => theme.size.mobile} {
		width: 11.6rem;
		display: ${({ isHome }) => (isHome ? 'block' : 'none')};
	}
`;

const LogoImg = styled.img`
	width: 21.5rem;
	@media ${({ theme }) => theme.size.tablet} {
		width: 16.6rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		width: 11.6rem;
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

const BtnWrap = styled.div`
	display: none;

	@media ${({ theme }) => theme.size.mobile} {
		display: flex;
		gap: 0 1rem;
	}
`;
const MoreBtn = styled.button`
	${MobileBtn}
	width: 4rem;
	height: 4rem;
	border-radius: 50rem;
	background-image: url(${LogoutIcon});
	background-color: ${({ theme }) => theme.grayColor4};
	background-size: 1.8rem;
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
	height: 5rem;
	width: 5rem;
`;

const PostingImg = styled.img`
	width: 1.9rem;
`;

const LogoutImg = styled.img`
	width: 2.1rem;
`;

export {
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
};
