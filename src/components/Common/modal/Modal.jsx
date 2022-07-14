import React from 'react';
import styled from 'styled-components';
const ModalBg = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
`;
const ModalWrap = styled.div`
	width: 40rem;
	height: 18.5rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
	font-size: 2rem;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	margin: auto;

	@media ${({ theme }) => theme.size.mobile} {
		width: 25rem;
		height: 11rem;
		font-size: 1.6rem;
		box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
	}
`;

const ModalTitle = styled.p`
	padding: 4rem 0;
	text-align: center;
	border-bottom: 0.1rem solid ${({ theme }) => theme.grayColor4};
	@media ${({ theme }) => theme.size.mobile} {
		padding: 2rem 0;
	}
`;

const ModalBtn = styled.button`
	padding: 2.4rem 0;
	width: 50%;
	border: none;
	background-color: transparent;
	color: ${({ theme }) => theme.grayColor2};
	& + button {
		border-left: 0.1rem solid ${({ theme }) => theme.grayColor4};
		color: ${({ theme }) => theme.mainColor};
	}
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1.2rem 0;
	}
`;

export default function Modal({
	ModalName,
	onClickCancleBtn,
	onClickDeleteBtn,
}) {
	return (
		<ModalBg>
			<ModalWrap>
				<ModalTitle>{ModalName}을 삭제할까요?</ModalTitle>
				<ModalBtn type="button" onClick={onClickCancleBtn}>
					취소
				</ModalBtn>
				<ModalBtn type="button" onClick={onClickDeleteBtn}>
					삭제
				</ModalBtn>
			</ModalWrap>
		</ModalBg>
	);
}
