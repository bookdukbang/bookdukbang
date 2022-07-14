import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
const BottomSheatBg = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
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
`;
const BottomSheatBtnBasic = css`
	width: 100%;
	box-sizing: border-box;
	border: none;
	background-color: transparent;
	padding: 1.1rem 2.5rem;
	text-align: left;
`;

const BottomSheatBtn = styled.button`
	${BottomSheatBtnBasic}
`;
const BottomSheatLink = styled(Link)`
	display: block;
	${BottomSheatBtnBasic}
`;

export default function BottomSheat() {
	return (
		<BottomSheatBg>
			<BottomSheatWrap>
				<BottomSheatBtn type="button">삭제</BottomSheatBtn>
				<BottomSheatBtn type="button">수정</BottomSheatBtn>
				<BottomSheatLink to="/">웹사이트에서 상품보기</BottomSheatLink>
			</BottomSheatWrap>
		</BottomSheatBg>
	);
}
