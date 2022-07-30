import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import IconClose from '../../../assets/icon_close.png';

const ProductWrap = styled.div`
	max-width: 55rem;
	margin: auto;
	padding: 4rem 3rem;
	height: 67rem;
	overflow: hidden auto;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	${({ theme }) => theme.ScrollbarStyle()}

	& > div {
		margin-bottom: 3rem;
	}

	& h3 {
		font-size: 2.4rem;
		font-weight: 700;
		display: inline-block;
	}
`;

const BtnWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 2rem;
	margin: 0;
`;

const BasicBtn = css`
	border-radius: 5px;
	border: none;
	display: block;
	box-sizing: border-box;
	font-weight: 700;
	text-align: center;
	flex-grow: 1;
	padding: 1.8rem 0;
	font-size: 1.6rem;

	&:hover {
		color: ${({ theme }) => theme.whiteColor};
		background-color: ${({ theme }) => theme.mainColor};
	}
`;

const DeleteBtn = styled.button`
	${BasicBtn}
	color: ${({ theme }) => theme.grayColor1};
	background-color: ${({ theme }) => theme.grayColor4};
`;

const ModifyBtn = styled(Link)`
	${BasicBtn}
	color: ${({ theme }) => theme.mainColor};
	border: 1px solid ${({ theme }) => theme.mainColor};
	background-color: ${({ theme }) => theme.bgMainColor};
`;

const CloseBtn = styled.button`
	width: 5rem;
	height: 5rem;
	position: absolute;
	right: 3rem;
	top: 4rem;
	border: none;
	background-image: url(${IconClose});
	background-repeat: no-repeat;
	background-size: 4rem;
	background-position: center;
	background-color: transparent;

	& span {
		${({ theme }) => theme.a11yHidden()}
	}
`;

const PriceSpan = styled.span`
	position: relative;
	display: inline-block;
	margin-left: 2rem;
	font-size: 1.6rem;
	font-weight: 700;
	color: ${({ theme }) => theme.mainColor};
	&::before {
		content: '';
		width: 0.2rem;
		position: absolute;
		top: 0;
		bottom: 0;
		left: -1rem;
		margin: 0.3rem auto;

		background-color: ${({ theme }) => theme.grayColor4};
	}
`;

export { ProductWrap, BtnWrap, DeleteBtn, ModifyBtn, CloseBtn, PriceSpan };
