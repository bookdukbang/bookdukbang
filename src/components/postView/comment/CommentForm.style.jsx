import styled from 'styled-components';

const WriteForm = styled.form`
	margin: 3rem -3rem 0;
	padding: 1.5rem;
	border-top: 1px solid ${({ theme }) => theme.grayColor4};
	position: relative;
	background-color: ${({ theme }) => theme.bgMainColor};

	&::after {
		content: '';
		clear: both;
		display: block;
	}

	& legend,
	& label {
		${({ theme }) => theme.a11yHidden()}
	}

	@media ${({ theme }) => theme.size.mobile} {
		margin: 0;
		padding: 1.2rem 1.5rem;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

const UserProfileImg = styled.img`
	border-radius: 50%;
	border: 0.1rem solid ${({ theme }) => theme.grayColor4};
	width: 5rem;
	height: 5rem;
	box-sizing: border-box;
	float: left;
	margin-right: 1.5rem;
	background-color: ${({ theme }) => theme.grayColor4};

	@media ${({ theme }) => theme.size.mobile} {
		width: 3.6rem;
		height: 3.6rem;
		margin-right: 0.7rem;
	}
`;

const WriteInput = styled.input`
	padding: 1rem;
	border-radius: 0.5rem;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 15rem 0 8rem;
	font-size: 2rem;
	border: none;
	outline: none;
	&::placeholder {
		color: ${({ theme }) => theme.grayColor3};
	}
	&:focus {
		border-bottom: 1px solid ${({ theme }) => theme.mainColor};
	}
	@media ${({ theme }) => theme.size.mobile} {
		margin: 0 9rem 0 6.6rem;
		font-size: 1.6rem;
	}
`;

const WriteBtn = styled.button`
	padding: 1.2rem 0;
	width: 12rem;
	border: 0.1rem solid ${({ theme }) => theme.mainColor};
	box-sizing: border-box;
	font-size: 1.6rem;
	font-weight: 700;
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.whiteColor};
	background-color: ${({ theme }) => theme.mainColor};
	float: right;

	&:disabled {
		background-color: ${({ theme }) => theme.bgMainColor};
		color: ${({ theme }) => theme.mainColor};
	}
	@media ${({ theme }) => theme.size.mobile} {
		width: 6rem;
		padding: 0.5rem 0;
		font-size: 1.4rem;
	}
`;

export { WriteForm, UserProfileImg, WriteInput, WriteBtn };
