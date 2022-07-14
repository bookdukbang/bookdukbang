import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchCardLi = styled.li`
	padding: 1rem 1.5rem;
	border-radius: 1rem;
	& + li {
		margin-top: 1rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		background-color: ${({ theme }) => theme.bgMainColor};
	}
`;
const UserLink = styled(Link)`
	display: grid;
	grid-template-rows: repeat(2, 2.6rem);
	grid-template-columns: 5.2rem 1fr;
	column-gap: 1rem;
	@media ${({ theme }) => theme.size.mobile} {
		grid-template-rows: repeat(2, 2rem);
		grid-template-columns: 4rem 1fr;
	}
`;
const UserProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10rem;
	grid-row: 1 / 3;
	border: 1px solid ${({ theme }) => theme.grayColor4};
`;

const UserName = styled.h3`
	font-size: 2rem;
	grid-column: 2 / 3;
	font-weight: 700;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
	}
`;

const UserAccount = styled.span`
	color: ${({ theme }) => theme.grayColor2};
	font-size: 1.6rem;
	font-weight: 300;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

export { SearchCardLi, UserLink, UserProfileImg, UserName, UserAccount };
