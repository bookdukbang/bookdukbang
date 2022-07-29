import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreBtnIcon from '../../../assets/moreBtn.png';

const CommentLi = styled.li`
	font-size: 1.6rem;
	position: relative;

	& + li {
		margin-top: 3rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
		& + div {
			margin-top: 1rem;
		}
	}
	&::after {
		content: '';
		display: block;
		clear: both;
	}
`;
const UserProfileImg = styled.img`
	border-radius: 50rem;
	border: 0.1rem solid ${({ theme }) => theme.grayColor4};
	width: 4rem;
	height: 4rem;
	box-sizing: border-box;
	float: left;
	margin-right: 1rem;
	background-color: ${({ theme }) => theme.grayColor4};

	@media ${({ theme }) => theme.size.mobile} {
		width: 3rem;
		height: 3rem;
		margin-right: 0.7rem;
	}
`;

const UserName = styled(Link)`
	grid-column: 2 / 3;
	font-weight: 700;
`;

const CommentTime = styled.span`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor2};
	font-weight: 300;

	&::before {
		content: '';
		display: inline-block;
		margin: 0 0.5rem;
		width: 0.3rem;
		height: 0.3rem;
		vertical-align: middle;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.grayColor2};
	}

	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.2rem;
	}
`;

const UserComment = styled.p`
	font-weight: 300;
	word-break: break-all;
`;

const CommentMoreBtn = styled.button`
	width: 1.8rem;
	height: 1.8rem;
	position: absolute;
	right: 0;
	top: 0;
	border: none;
	background-color: transparent;
	background-image: url(${MoreBtnIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 1.8rem 1.8rem;

	& span {
		${({ theme }) => theme.a11yHidden()}
	}
`;

export {
	CommentLi,
	UserProfileImg,
	UserName,
	CommentTime,
	UserComment,
	CommentMoreBtn,
};
