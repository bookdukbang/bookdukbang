import React from 'react';
import styled from 'styled-components';
import Profile from '../../assets/chatprofile.png';
import ChatImg from '../../assets/chatImg.png';

const ChatMessageImg = styled.img`
	width: 24rem;
	margin-top: 1rem;
`;

const ProfileImg = styled.img`
	width: 5rem;
	margin-right: 1.5rem;
	margin-left: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 4rem;
		margin-left: 1.6rem;
	}
`;

const MessageWrap = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 1rem;
	&.send {
		display: flex;
		justify-content: flex-end;
		margin-right: 3rem;
		@media ${({ theme }) => theme.size.mobile} {
			margin-right: 1.6rem;
		}
	}
	&.first {
		margin-top: 22.3rem;
		@media ${({ theme }) => theme.size.mobile} {
			margin-top: 17.1rem;
		}
	}
`;

const ReceiveMessageDiv = styled.div`
	border: 1px solid ${({ theme }) => theme.grayColor4};
	padding: 1.5rem;
	max-width: 41.6rem;
	border-radius: 0 1rem 1rem 1rem;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 23.3rem;
		padding: 0.9rem 1.5rem;
	}
`;

const ReceiveMessage = styled.p`
	font-weight: 400;
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
	word-break: break-all;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
	}
`;

const ReceiveMessageTime = styled.span`
	color: ${({ theme }) => theme.grayColor2};
	margin-left: 0.5rem;
	font-weight: 400;
	font-size: 1.4rem;
	margin-top: auto;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.2rem;
	}
`;

const SendMessageDiv = styled(ReceiveMessageDiv)`
	border-radius: 1rem 0 1rem 1rem;
	background-color: ${({ theme }) => theme.mainColor};
`;

const SendMessage = styled(ReceiveMessage)`
	color: ${({ theme }) => theme.whiteColor};
`;

const SendMessageTime = styled(ReceiveMessageTime)`
	margin-right: 0.5rem;
`;

function ChatContent() {
	return (
		<>
			<MessageWrap className="first">
				<ProfileImg src={Profile} />

				<ReceiveMessageDiv>
					<ReceiveMessage>
						옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의
						위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와
						약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
					</ReceiveMessage>
				</ReceiveMessageDiv>

				<ReceiveMessageTime>12:39</ReceiveMessageTime>
			</MessageWrap>

			<MessageWrap>
				<ProfileImg src={Profile} />

				<ReceiveMessageDiv>
					<ReceiveMessage>
						안녕하세요. 네고 가능합니까?
					</ReceiveMessage>
				</ReceiveMessageDiv>

				<ReceiveMessageTime>12:41</ReceiveMessageTime>
			</MessageWrap>

			<MessageWrap className="send">
				<SendMessageTime>12:50</SendMessageTime>
				<SendMessageDiv>
					<SendMessage>네 말씀하세요.</SendMessage>
				</SendMessageDiv>
			</MessageWrap>

			<MessageWrap className="send">
				<SendMessageTime>12:51</SendMessageTime>
				<ChatMessageImg src={ChatImg} />
			</MessageWrap>
		</>
	);
}

export default ChatContent;
