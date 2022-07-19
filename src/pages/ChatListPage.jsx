import React from 'react';
import styled from 'styled-components';
import FeedHeader from '../components/common/FeedHeader';
import ChatList from '../components/chat/ChatList';
import Wrap from '../components/common/Wrap';
import NavigatorMenu from '../components/navigator/NavigatorMenu';

const ChatWrap = styled(Wrap)`
	display: flex;
	justify-content: space-around;
	gap: 3rem;
	margin-top: 2.7rem;
	@media ${({ theme }) => theme.size.mobile} {
		margin-top: 1rem;
	}
`;

const ChatRoom = styled.div`
	flex-basis: 72rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	text-align: center;
	@media ${({ theme }) => theme.size.tablet} {
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

			<NavigatorMenu />
		</>
	);
}

export default ChatListPage;
