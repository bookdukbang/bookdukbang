import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/header/FeedHeader';
import ChatList from '../components/chat/ChatList';
import Wrap from '../components/common/Wrap';
import ChatContent from '../components/chat/ChatContent';
import MessageBottom from '../components/chat/MessageBottom';

const ChatWrap = styled(Wrap)`
	display: flex;
	justify-content: space-around;
	gap: 3rem;
	margin-top: 2.7rem;
	@media ${({ theme }) => theme.size.mobile} {
		margin-top: 0;
	}
`;

const ChatRoom = styled.div`
	flex-basis: 72rem;
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	@media ${({ theme }) => theme.size.mobile} {
		background-color: ${({ theme }) => theme.bgsubColor};
	}
`;

const ChatTop = styled.div`
	text-align: center;
	padding: 2rem 0;
	border-bottom: 0.1rem solid ${({ theme }) => theme.grayColor4};
	@media ${({ theme }) => theme.size.mobile} {
		padding: 1.8rem 0;
		display: ${({ isHome }) => (isHome ? 'none' : 'block')};
	}
`;

const MessageSender = styled.p`
	font-weight: 700;
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
`;

const Sender = styled.p`
	font-weight: 700;
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
	display: none;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
		display: block;
	}
`;

function ChatContentPage() {
	return (
		<>
			<FeedHeader>
				<Sender>네고왕</Sender>
			</FeedHeader>

			<ChatWrap>
				<ChatList isHome />
				<ChatRoom>
					<ChatTop isHome>
						<MessageSender>네고왕</MessageSender>
					</ChatTop>

					<ChatContent />

					<MessageBottom />
				</ChatRoom>
			</ChatWrap>
		</>
	);
}

export default ChatContentPage;
