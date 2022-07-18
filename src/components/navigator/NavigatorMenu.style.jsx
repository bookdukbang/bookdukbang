import { NavLink, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import EditIcon from '../../assets/icon_edit.png';

const NavigatorWrap = styled.nav`
	background-color: ${({ theme }) => theme.bgMainColor};
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	box-shadow: 0 -1rem 3rem rgba(200, 200, 200, 0.1);
	display: none;
	@media ${({ theme }) => theme.size.mobile} {
		display: flex;
	}
`;

const NavigatorBtn = css`
	display: block;
	width: 20%;
	font-size: 1.4rem;
	font-weight: 400;
	text-align: center;
	& span {
		display: block;
	}
`;

const MenuBtn = styled(NavLink)`
	${NavigatorBtn}
	padding: 1rem 0 0.8rem;
	color: ${({ theme }) => theme.grayColor2};
	& svg {
		& > path {
			stroke: ${({ theme }) => theme.grayColor2};
		}
	}
	&.active {
		border-bottom: 0.3rem solid ${({ theme }) => theme.mainColor};
		& svg {
			padding-top: 1rem;
			width: 30px;
			height: 30px;
			color: ${({ theme }) => theme.mainColor};
			& > path {
				stroke: ${({ theme }) => theme.mainColor};
			}
		}
		& span {
			${({ theme }) => theme.a11yHidden()}
		}
	}
`;

const PostingBtn = styled(Link)`
	${NavigatorBtn}
	width: 6rem;
	height: 6rem;

	background-image: url(${EditIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 3.4rem;
	background-color: ${({ theme }) => theme.mainColor};
	margin: -2rem auto 0;
	border-radius: 2.5rem;

	& span {
		${({ theme }) => theme.a11yHidden()}
	}
`;

export { NavigatorWrap, MenuBtn, PostingBtn };
