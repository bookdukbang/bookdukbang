import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/FeedHeader';
import ChatList from '../components/chat/ChatList';
import Wrap from '../components/common/Wrap';

const ChatWrap = styled(Wrap)`
	display: flex;
	justify-content: space-around;
	gap: 3rem;
	margin-top: 3rem;
`;

const ChatRoom = styled.div`
	max-width: 72rem;
	width: 100%;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	text-align: center;
	@media ${({ theme }) => theme.size.mobile} {
		display: none;
	}
`;

const ChatGuide = styled.p`
	font-weight: 700;
	font-size: 3.6rem;
	color: ${({ theme }) => theme.grayColor4};
	padding: 44rem 7.6rem;
`;

function ChatListPage() {
	return (
		<>
			<FeedHeader />

			<ChatWrap>
				<ChatList />

				<ChatRoom>
					<ChatGuide>친구에게 사진과 메시지를 보내세요.</ChatGuide>
				</ChatRoom>
			</ChatWrap>
		</>
	);
}

export default ChatListPage;
