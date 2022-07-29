import React from 'react';
import styled from 'styled-components';
const ModalBg = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 800;
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

function Modal({ ModalInfo }) {
	return (
		<ModalBg>
			<ModalWrap>
				<ModalTitle>
					{ModalInfo.title}을 {ModalInfo.whatDo}할까요?
				</ModalTitle>
				<ModalBtn type="button" onClick={ModalInfo.cancel}>
					취소
				</ModalBtn>
				<ModalBtn type="button" onClick={ModalInfo.delete}>
					{ModalInfo.whatDo}
				</ModalBtn>
			</ModalWrap>
		</ModalBg>
	);
}
export default Modal;
