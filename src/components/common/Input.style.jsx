import styled from 'styled-components';

const InputDiv = styled.div`
	margin-bottom: 1rem;
`;

const LabelStyle = styled.label`
	width: 100%;
	font-weight: 700;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor2};
	display: block;
	margin-bottom: 0.5rem;

	// IR 기법
	&.hide {
		${({ theme }) => theme.a11yHidden()};
	}
`;

const InputStyle = styled.input`
	width: 100%;
	font-weight: 400;
	font-size: 2rem;
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.textColor};
	padding: 2rem;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.bgsubColor};
	::placeholder {
		color: ${({ theme }) => theme.grayColor3};
	}
	border: 0.1rem solid ${({ theme }) => theme.grayColor4};
	&:focus {
		outline: 0.1rem solid ${({ theme }) => theme.mainColor};
	}
	/* 아이디 혹은 비밀번호가 일치하지 않을 경우 쓰이는 코드입니다. 일치하지 않을 경우 바로 위에 border와 foucs 대신에서 아래의 코드를 사용하면 됩니다. */
	&.error {
		border: 0.1rem solid ${({ theme }) => theme.errorColor};
		&:focus {
			outline: 0.1rem solid ${({ theme }) => theme.errorColor};
		}
	}

	@media (max-width: 390px) {
		font-weight: 300;
		font-size: 1.6rem;
		padding: 1.3rem;
	}
`;

// '로그인' 페이지에서 이메일, 비밀번호가 일치하지 않았을 경우 나타나는 문구 스타일
const ErrorText = styled.p`
	color: ${({ theme }) => theme.errorColor};
	font-weight: 400;
	font-size: 1.4rem;
	display: block;
	margin-top: 0.5rem;
	@media (max-width: 390px) {
		font-weight: 400;
		font-size: 1.2rem;
	}
`;

export { InputStyle, InputDiv, LabelStyle, ErrorText };
