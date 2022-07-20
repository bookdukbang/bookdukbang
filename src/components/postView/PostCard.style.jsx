import styled from 'styled-components';
import HeartIcon from '../../assets/heart.png';
import CommentIcon from '../../assets/comment.png';

const UserWrap = styled.div`
	margin-bottom: 2.5rem;
	&::after {
		clear: both;
		content: '';
		display: block;
	}
	@media ${({ theme }) => theme.size.mobile} {
		margin-bottom: 1.5rem;
	}
`;

const PostCardWrap = styled.div`
	padding: 3rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.bgMainColor};

	@media ${({ theme }) => theme.size.mobile} {
		padding: 2rem 1.5rem;
	}
`;
const PostText = styled.p`
	font-size: 2rem;
	text-align: justify;
	& + p {
		margin-top: 1rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
	}
`;

const ReactionWrap = styled.dl`
	margin-top: 1.5rem;
	color: ${({ theme }) => theme.grayColor1};
	font-size: 1.4rem;

	& dt {
		width: 2rem;
		height: 2rem;
		margin-right: 0.5rem;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 2rem;
		float: left;

		&:first-of-type {
			background-image: url(${HeartIcon});
		}

		&:nth-of-type(2) {
			background-image: url(${CommentIcon});
		}

		& span {
			${({ theme }) => theme.a11yHidden()}
		}
	}

	& dd {
		float: left;

		&:last-of-type {
			font-weight: 300;
			float: right;
			color: ${({ theme }) => theme.grayColor2};
		}
	}

	& dd + dt {
		margin-left: 1rem;
	}

	&::after {
		clear: both;
		content: '';
		display: block;
	}

	@media ${({ theme }) => theme.size.mobile} {
		margin-top: 1rem;
		font-size: 1.2rem;
	}
`;

export { UserWrap, PostText, PostCardWrap, ReactionWrap };
