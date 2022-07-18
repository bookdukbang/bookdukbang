import React from 'react';
import styled from 'styled-components';
import Profile from '../../assets/chatprofile.png';
import {
	ChatContainer,
	ChatDiv,
	Chatstyle,
	ChatName,
	ChatContent,
	ChatDate,
	ChatDivLink,
} from '../chat/ChatList.style';

const ProfileImg = styled.img`
	margin-right: 1.5rem;
	width: 5rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 4rem;
		margin-right: 0.7rem;
	}
`;

const ChatNotice = styled.span`
	width: 1.5rem;
	height: 1.5rem;
	background-color: ${({ theme }) => theme.mainColor};
	border-radius: 50%;
	position: absolute;
	left: 1.5rem;
	top: 1.5rem;
`;

function ChatList({ isHome }) {
	return (
		<>
			<ChatContainer isHome={isHome}>
				<ChatDivLink to="/chatcontent">
					<ProfileImg src={Profile} alt="프로필" />
					<ChatNotice />

					<Chatstyle>
						<ChatName>네고왕</ChatName>
						<ChatContent>님 만원 네고 가능?</ChatContent>
					</Chatstyle>
					<ChatDate>2022.07.04</ChatDate>
				</ChatDivLink>

				<ChatDiv>
					<ProfileImg src={Profile} alt="프로필" />

					<Chatstyle>
						<ChatName>와썹맨</ChatName>
						<ChatContent>hey</ChatContent>
					</Chatstyle>
					<ChatDate>2022.07.04</ChatDate>
				</ChatDiv>

				<ChatDiv>
					<ProfileImg src={Profile} alt="프로필" />
					<Chatstyle>
						<ChatName>워크맨</ChatName>
						<ChatContent>최저시급 얼만지 앎?</ChatContent>
					</Chatstyle>
					<ChatDate>2022.07.04</ChatDate>
				</ChatDiv>
			</ChatContainer>
		</>
	);
}

export default ChatList;
