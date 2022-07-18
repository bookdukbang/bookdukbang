import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/FeedHeader';
import ChatList from '../components/chat/ChatList';
import Wrap from '../components/common/Wrap';
import ChatContent from '../components/chat/ChatContent';
import MessageBottom from '../components/chat/MessageBottom';

const ChatWrap = styled(Wrap)`
	display: flex;
	justify-content: space-around;
	gap: 3rem;
	margin-top: 3rem;
`;

const ChatRoom = styled.div`
	max-width: 72rem;
	width: 100%;
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

const Sender = styled.p`
	font-weight: 700;
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
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
						<Sender>네고왕</Sender>
					</ChatTop>

					<ChatContent />

					<MessageBottom />
				</ChatRoom>
			</ChatWrap>
		</>
	);
}

export default ChatContentPage;
