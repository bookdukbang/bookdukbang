import styled from 'styled-components';
import { ButtonStyle } from '../common/Button.style';

const ProductFormStyle = styled.form`
	max-width: 61rem;
	margin: 0 auto;
	padding: 3rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	box-sizing: border-box;

	& legend {
		${({ theme }) => theme.a11yHidden()}
	}

	& input {
		margin-bottom: 1rem;
	}
	& input::-webkit-outer-spin-button,
	& input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	& input[type='number'] {
		-moz-appearance: textfield;
	}
`;

const ProductImgWrap = styled.div`
	max-width: 55rem;
	text-align: center;
	position: relative;
	border-radius: 0.5rem;
	overflow: hidden;
	border: 0.1rem solid ${({ theme }) => theme.grayColor4};

	& + div {
		margin-top: 3rem;
	}

	& label {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
	}

	& img {
		width: 100%;
		min-height: 20rem;
		max-height: 44rem;
	}

	@media ${({ theme }) => theme.size.mobile} {
		background-size: 32rem 25.6rem;
	}
`;

const ProductImg = styled.img``;

const ProductBtn = styled(ButtonStyle)`
	padding: 1.8rem 0;
	font-size: 2.4rem;
	margin-top: 3rem;
	font-weight: 700;

	&:disabled {
		opacity: 0.6;
	}

	@media ${({ theme }) => theme.size.mobile} {
		padding: 1rem 0;
		font-size: 2rem;
	}
`;

export { ProductFormStyle, ProductImgWrap, ProductBtn, ProductImg };
