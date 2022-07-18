import React from 'react';
import styled from 'styled-components';
import Profile from '../../assets/chatprofile.png';
import ChatNotice from '../../assets/chatNotice.png';
import {
	ChatContainer,
	ChatDiv,
	Chatstyle,
	ChatName,
	ChatContent,
	ChatDate,
	ChatDivLink,
} from '../chat/ChatList.style';

const ImgDiv = styled.div`
	position: relative;
`;

const ProfileImg = styled.img`
	margin-right: 1.5rem;
	width: 5rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 4rem;
		margin-right: 0.7rem;
	}
`;

const ChatNoticeImg = styled.img`
	width: 1.5rem;
	position: absolute;
	left: 0;
	@media ${({ theme }) => theme.size.mobile} {
		width: 1.2rem;
	}
`;

function ChatList({ isHome }) {
	return (
		<>
			<ChatContainer isHome={isHome}>
				<ChatDiv>
					<ImgDiv>
						<ProfileImg src={Profile} />
						<ChatNoticeImg src={ChatNotice} />
					</ImgDiv>

					<Chatstyle>
						<ChatName>와썹맨</ChatName>
						<ChatContent>hey</ChatContent>
					</Chatstyle>
					<ChatDate>2022.07.04</ChatDate>
				</ChatDiv>

				<ChatDivLink to="/chatcontent">
					<ImgDiv>
						<ProfileImg src={Profile} />
						<ChatNoticeImg src={ChatNotice} />
					</ImgDiv>
					<Chatstyle>
						<ChatName>네고왕</ChatName>
						<ChatContent>님 만원 네고 가능?</ChatContent>
					</Chatstyle>
					<ChatDate>2022.07.04</ChatDate>
				</ChatDivLink>

				<ChatDiv>
					<ImgDiv>
						<ProfileImg src={Profile} />
						<ChatNoticeImg src={ChatNotice} />
					</ImgDiv>
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
