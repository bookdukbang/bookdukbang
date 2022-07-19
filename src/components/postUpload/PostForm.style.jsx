import styled from 'styled-components';

const PostFormStyle = styled.form`
	flex-grow: 1;
	padding: 3rem;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
	& legend {
		${({ theme }) => theme.a11yHidden()};
	}
`;

const PostTextareaWrap = styled.div`
	width: 100%;
	margin: 2.5rem 0;

	& label {
		${({ theme }) => theme.a11yHidden()};
	}
	@media ${({ theme }) => theme.size.mobile} {
		margin: 1.5rem 0;
	}
`;

const PostTextarea = styled.textarea`
	width: 100%;
	min-height: 31.6rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	border: none;
	resize: none;
	outline: none;
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
	font-family: 'Noto Sans KR', sans-serif;
	${({ theme }) => theme.ScrollbarStyle()};

	&::placeholder {
		color: ${({ theme }) => theme.grayColor3};
	}
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
	}
`;

export { PostFormStyle, PostTextareaWrap, PostTextarea };
