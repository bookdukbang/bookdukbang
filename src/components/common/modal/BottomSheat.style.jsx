import styled from 'styled-components';

const BottomSheatBg = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 800;
`;
const BottomSheatWrap = styled.div`
	width: 100%;
	padding-bottom: 1rem;
	border-radius: 1rem 1rem 0px 0px;
	background-color: ${({ theme }) => theme.bgMainColor};
	position: fixed;
	left: 0;
	bottom: 0;

	&::before {
		content: '';
		display: block;
		width: 5rem;
		height: 0.4rem;
		border-radius: 1rem;
		margin: 1.6rem auto;
		background-color: ${({ theme }) => theme.grayColor4};
	}

	& a,
	& button {
		display: block;
		width: 100%;
		box-sizing: border-box;
		border: none;
		background-color: transparent;
		padding: 1.1rem 2.5rem;
		text-align: left;
		color: ${({ theme }) => theme.textColor};
	}
`;

export { BottomSheatBg, BottomSheatWrap };
