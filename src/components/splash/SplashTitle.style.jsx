import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TitleStyle = styled.div`
	text-align: center;
	word-break: keep-all;
	@media ${({ theme }) => theme.size.mobile} {
		text-align: left;
	}
`;

const Maintitle = styled.p`
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

const JoinTitleP = styled.p`
	text-align: center;
	margin-top: 3.4rem;
	color: ${({ theme }) => theme.whiteColor};
	font-weight: 400;
	font-size: 2.4rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 300;
		font-size: 1.4rem;
	}
`;

const JoinTitleLink = styled(Link)`
	font-weight: 700;
	margin-left: 0.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

export { TitleStyle, Maintitle, Subtitle, JoinTitleP, JoinTitleLink };
