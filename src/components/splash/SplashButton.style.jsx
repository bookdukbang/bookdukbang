import styled from 'styled-components';
import Email from '../../assets/email.png';
import Kakao from '../../assets/kakao.png';
import Goggle from '../../assets/goggle.png';
import Facebook from '../../assets/facebook.png';
import HoverEmail from '../../assets/HoverEmail.png';
import HoverKakao from '../../assets/HoverKakao.png';
import HoverGoggle from '../../assets/HoverGoggle.png';
import HoverFacebook from '../../assets/HoverFacebook.png';
import { ButtonStyle } from '../../components/common/Button.style';

const SplashBtnDiv = styled.div`
	max-width: 55rem;
	width: 100%;
	margin: 0 auto;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 32rem;
	}
`;

const SplashBtn = styled(ButtonStyle)`
	padding: 2.8rem 0;
	font-size: 3rem;
	margin-top: 5.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1.7rem 0;
		font-size: 2rem;
		width: 100%;
		margin-top: 18.8rem;
	}
`;

const LoginBtnDiv = styled(SplashBtnDiv)`
	margin: 9.3rem auto 0;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 32rem;
	}
`;

const LoginBtn = styled(ButtonStyle)`
	text-align: center;
	padding: 2rem 0;
	font-size: 2.4rem;
	margin-top: 2rem;
	background-color: transparent;
	position: relative;
	box-sizing: border-box;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1.4rem 0;
		font-size: 1.6rem;
		margin-top: 1rem;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
	}
`;

const EmailBtn = styled(LoginBtn)`
	border: 2px solid ${({ theme }) => theme.mainColor};

	&::before {
		background: url(${Email}) no-repeat center / 3.3rem 2.6rem;
		width: 3.3rem;
		height: 2.6rem;
		margin: 2.1rem 3.3rem;
		@media ${({ theme }) => theme.size.mobile} {
			background: url(${Email}) no-repeat center / 2rem 1.6rem;
			width: 2rem;
			height: 1.6rem;
			margin: 1.7rem 1.6rem;
		}
	}

	&:hover {
		background-color: ${({ theme }) => theme.mainColor};

		&::before {
			background: url(${HoverEmail}) no-repeat center / 3.3rem 2.6rem;
			@media ${({ theme }) => theme.size.mobile} {
				background: url(${HoverEmail}) no-repeat center / 2rem 1.6rem;
				width: 2rem;
				height: 1.6rem;
				margin: 1.7rem 1.6rem;
			}
		}
	}
`;

const KakaoBtn = styled(LoginBtn)`
	border: 2px solid #f2c94c;

	&::before {
		background: url(${Kakao}) no-repeat center / 3rem 3rem;
		width: 3rem;
		height: 3rem;
		margin: 2rem 3.5rem;
		@media ${({ theme }) => theme.size.mobile} {
			background: url(${Kakao}) no-repeat center / 1.8rem 1.8rem;
			width: 1.8rem;
			height: 1.8rem;
			margin: 1.6rem 1.7rem;
		}
	}

	&:hover {
		background-color: #f2c94c;

		&::before {
			background: url(${HoverKakao}) no-repeat center / 3rem 3rem;
			@media ${({ theme }) => theme.size.mobile} {
				background: url(${HoverKakao}) no-repeat center / 1.8rem 1.8rem;
				width: 1.8rem;
				height: 1.8rem;
				margin: 1.6rem 1.7rem;
			}
		}
	}
`;

const GoggleBtn = styled(LoginBtn)`
	border: 2px solid ${({ theme }) => theme.grayColor3};

	&::before {
		background: url(${Goggle}) no-repeat center / 3rem 3rem;
		width: 3rem;
		height: 3rem;
		margin: 2rem 3.5rem;
		@media ${({ theme }) => theme.size.mobile} {
			background: url(${Goggle}) no-repeat center / 1.8rem 1.8rem;
			width: 1.8rem;
			height: 1.8rem;
			margin: 1.6rem 1.7rem;
		}
	}

	&:hover {
		background-color: ${({ theme }) => theme.grayColor3};

		&::before {
			background: url(${HoverGoggle}) no-repeat center / 3rem 3rem;
			@media ${({ theme }) => theme.size.mobile} {
				background: url(${HoverGoggle}) no-repeat center / 1.8rem 1.8rem;
				width: 1.8rem;
				height: 1.8rem;
				margin: 1.6rem 1.7rem;
			}
		}
	}
`;

const FacebookBtn = styled(LoginBtn)`
	border: 2px solid #2d9cdb;

	&::before {
		background: url(${Facebook}) no-repeat center / 1.8rem 3.3rem;
		width: 1.8rem;
		height: 3.3rem;
		margin: 1.8rem 4rem;
		@media ${({ theme }) => theme.size.mobile} {
			background: url(${Facebook}) no-repeat center / 1.1rem 2rem;
			width: 1.1rem;
			height: 2rem;
			margin: 1.2rem 2rem;
		}
	}

	&:hover {
		background-color: #2d9cdb;

		&::before {
			background: url(${HoverFacebook}) no-repeat center / 1.8rem 3.3rem;
			@media ${({ theme }) => theme.size.mobile} {
				background: url(${HoverFacebook}) no-repeat center / 1.1rem 2rem;
				width: 1.1rem;
				height: 2rem;
				margin: 1.2rem 2rem;
			}
		}
	}
`;

export {
	SplashBtnDiv,
	SplashBtn,
	LoginBtnDiv,
	LoginBtn,
	EmailBtn,
	KakaoBtn,
	GoggleBtn,
	FacebookBtn,
};
