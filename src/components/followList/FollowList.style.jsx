import styled from 'styled-components';
import { ButtonStyle } from '../common/Button.style';

const HeaderText = styled.p`
	font-weight: 700;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.textColor};
	display: none;
	@media ${({ theme }) => theme.size.mobile} {
		display: block;
	}
`;

const FollowerSection = styled.section`
	max-width: 72rem;
	margin: 3rem auto;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
	padding: 3rem;
	height: 92.7rem;
	overflow: scroll;
	overflow-x: hidden;
	${({ theme }) => theme.ScrollbarStyle()}
	@media ${({ theme }) => theme.size.mobile} {
		background-color: ${({ theme }) => theme.bgsubColor};
		margin: 0;
		padding: 1rem;
	}
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.textColor};
	text-align: center;
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 4rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const UserLi = styled.li`
	display: flex;
	background-color: ${({ theme }) => theme.whiteColor};
	border-radius: 1rem;
	padding: 1rem 1.5rem;
	margin-bottom: 3rem;
	position: relative;
	@media ${({ theme }) => theme.size.mobile} {
		margin-bottom: 1rem;
	}
`;

const UserInfo = styled.h2`
	font-weight: 700;
	font-size: 2rem;
	${({ theme }) => theme.TextShortening()}

	& p {
		font-weight: 300;
		font-size: 1.6rem;
		color: ${({ theme }) => theme.grayColor2};
		@media ${({ theme }) => theme.size.mobile} {
			font-size: 1.4rem;
		}
	}
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
		max-width: 16rem;
	}
`;

const FollowBtn = styled(ButtonStyle)`
	width: 13rem;
	font-size: 1.6rem;
	font-weight: 700;
	padding: 1.3rem 3.8rem;
	position: absolute;
	right: 3rem;
	top: 1rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 9rem;
		right: 1.5rem;
		top: 1.5rem;
		font-size: 1.4rem;
		padding: 0.5rem 2rem;
	}
`;

const FollowingBtn = styled(FollowBtn)`
	background-color: ${({ theme }) => theme.bgMainColor};
	color: ${({ theme }) => theme.mainColor};
	border: 0.1rem solid ${({ theme }) => theme.mainColor};
`;

export {
	HeaderText,
	FollowerSection,
	Title,
	UserLi,
	UserInfo,
	FollowBtn,
	FollowingBtn,
};
