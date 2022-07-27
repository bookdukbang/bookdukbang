import styled from 'styled-components';
import searchIcon from '../../assets/icon-search.png';

const SearchForm = styled.form`
	width: 55rem;
	margin-left: 3%;
	position: relative;

	@media ${({ theme }) => theme.size.tablet} {
		width: 30.6rem;
	}
	& label {
		${({ theme }) => theme.a11yHidden()};
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

	&::placeholder {
		color: ${({ theme }) => theme.grayColor3};
	}
	&:focus {
		outline-color: ${({ theme }) => theme.mainColor};
	}
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1rem;
		font-size: 1.4rem;
		border-radius: 0.5rem;
	}
`;

const SearchBtn = styled.button`
	width: 3rem;
	height: 3rem;
	position: absolute;
	right: 3rem;
	top: 50%;
	transform: translateY(-50%);
	border: none;
	background-color: transparent;
	background-image: url(${searchIcon});
	background-repeat: no-repeat;
	background-size: 3rem;
	background-position: center;
	& span {
		${({ theme }) => theme.a11yHidden()}
	}
	@media ${({ theme }) => theme.size.mobile} {
		background-size: 2rem;
		right: 0.5rem;
	}
`;

export { SearchInput, SearchForm, SearchBtn };
