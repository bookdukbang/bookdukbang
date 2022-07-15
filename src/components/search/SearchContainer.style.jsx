import styled from 'styled-components';
const SearchSection = styled.section`
	max-width: 61rem;
	margin: 3rem auto;
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 2rem 1.5rem;
	border-radius: 1rem;
	min-height: 50rem;
	position: relative;

	@media ${({ theme }) => theme.size.mobile} {
		background-color: rgba(255, 255, 255, 0);
		margin: 1rem 0;
		padding: 0;
	}
`;

const SectionTitle = styled.h2`
	${({ theme }) => theme.a11yHidden()}
`;

const SearchLoadingWrap = styled.div`
	text-align: center;
	color: ${({ theme }) => theme.grayColor2};
	height: 85px;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;

	& h3 {
		font-size: 3.6rem;
		font-weight: 700;
		margin-bottom: 5px;
	}

	& p {
		font-size: 2rem;
	}

	@media ${({ theme }) => theme.size.mobile} {
		& h3 {
			font-size: 2.4rem;
		}
		& p {
			font-size: 1.6rem;
		}
	}
`;

export { SearchSection, SectionTitle, SearchLoadingWrap };
