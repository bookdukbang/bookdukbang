import styled from 'styled-components';
import searchIcon from '../../assets/icon-search.png';

const SedarchHeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 1.6rem 0;

	& label {
		${({ theme }) => theme.a11yHidden()};
	}
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1rem 2rem;
	}
`;

const SearchForm = styled.form`
	max-width: 55rem;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 30.6rem;
	}
`;

const SearchInput = styled.input`
	width: 100%;
	padding: 2rem;
	box-sizing: border-box;
	border: none;
	background-color: ${({ theme }) => theme.grayColor5};
	font-size: 2rem;
	border-radius: 1rem;
	background-image: url(${searchIcon});
	background-repeat: no-repeat;
	background-size: 3rem;
	background-position: right 2rem center;
	&::placeholder {
		color: ${({ theme }) => theme.grayColor3};
	}
	&:focus {
		outline-color: ${({ theme }) => theme.mainColor};
	}
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1rem;
		font-size: 1.4rem;
		background-position: right 0.5rem center;
		border-radius: 0.5rem;
	}
`;

export { SedarchHeaderStyle, SearchInput, SearchForm };
