import React from 'react';
import styled from 'styled-components';
import ImgUpload from '../../assets/chatMenu.png';
import { NoInputLittleBtn } from '../common/Button.style';
// 메시지가 입력되었을때 해당 버튼 스타일
// import { LittleBtn } from '../common/Button.style';

const ChatBottom = styled.div`
	border-top: 0.1rem solid ${({ theme }) => theme.grayColor4};
	display: flex;
	align-items: center;
	position: relative;
	@media ${({ theme }) => theme.size.mobile} {
		background-color: ${({ theme }) => theme.bgMainColor};
	}
`;

const ImgUploadBtn = styled.button`
	padding: 0;
	border: none;
	background-color: transparent;
`;

const ImgUploadImg = styled.img`
	width: 5rem;
	padding: 1.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 3.6rem;
		padding: 1.1rem 1.5rem;
	}
`;

const ChatDiv = styled.div`
	max-width: 40rem;
	width: 100%;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 18rem;
	}
`;

const LabelStyle = styled.label`
	&.hide {
		${({ theme }) => theme.a11yHidden()};
	}
`;

const InputStyle = styled.input`
	color: ${({ theme }) => theme.textColor};
	padding: 2rem;
	border: none;
	width: 100%;
	font-size: 2rem;
	font-weight: 400;
	::placeholder {
		color: ${({ theme }) => theme.grayColor3};
		font-weight: 400;
		font-size: 2rem;
		@media ${({ theme }) => theme.size.mobile} {
			font-size: 1.6rem;
		}
	}
	:focus {
		outline: none;
	}
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
		padding: 1.8rem 1.5rem;
		max-width: 15rem;
	}
`;

const NoInputBtn = styled(NoInputLittleBtn)`
	position: absolute;
	right: 1.5rem;
	max-width: 12rem;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 6rem;
		padding: 0.5rem 0;
	}
`;

// 메시지가 입력되었을때 해당 버튼 스타일
// const InputBtn = styled(LittleBtn)`
// 	position: absolute;
// 	right: 1.5rem;
// 	max-width: 12rem;
// 	@media ${({ theme }) => theme.size.mobile} {
// 		max-width: 6rem;
// 		padding: 0.5rem 0;
// 	}
// `;

function MessageBottom() {
	return (
		<>
			<ChatBottom>
				<ImgUploadBtn type="button">
					<ImgUploadImg src={ImgUpload} alt="이미지 업로드" />
				</ImgUploadBtn>

				<ChatDiv>
					<LabelStyle className="hide">메시지 입력</LabelStyle>
					<InputStyle type="text" placeholder="메시지 입력하기.." />
				</ChatDiv>

				<NoInputBtn type="button">전송</NoInputBtn>
			</ChatBottom>
		</>
	);
}

export default MessageBottom;
