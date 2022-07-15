import styled from 'styled-components';

const TitleStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	word-break: keep-all;
	@media ${({ theme }) => theme.size.mobile} {
		align-items: flex-start;
	}
`;

const Maintitle = styled.h1`
	color: ${({ theme }) => theme.whiteColor};
	font-weight: 700;
	font-size: 6rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 3.6rem;
	}
`;

const Subtitle = styled.p`
	color: ${({ theme }) => theme.whiteColor};
	font-weight: 700;
	font-size: 2.4rem;
	margin-top: 2.8rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 400;
		font-size: 2rem;
	}
`;

const JoinTitle = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3.4rem;
	@media ${({ theme }) => theme.size.mobile} {
		margin-top: 2.2rem;
	}
`;

const JoinTitleP = styled.p`
	color: ${({ theme }) => theme.whiteColor};
	font-weight: 400;
	font-size: 2rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 300;
		font-size: 1.4rem;
	}
`;

const JoinTitleClick = styled(JoinTitleP)`
	font-weight: 700;
	margin-left: 0.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

export {
	TitleStyle,
	Maintitle,
	Subtitle,
	JoinTitle,
	JoinTitleP,
	JoinTitleClick,
};
