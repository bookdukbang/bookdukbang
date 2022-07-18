import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ChatContainer = styled.div`
	max-width: 62rem;
	width: 100%;
	@media ${({ theme }) => theme.size.mobile} {
		display: ${({ isHome }) => (isHome ? 'none' : 'block')};
	}
`;

const ChatDivStyle = css`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.bgMainColor};
	position: relative;
	max-width: 62rem;
	padding: 1.5rem;
	border-radius: 10px;
	margin-bottom: 1rem;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 37rem;
	}
`;

const ChatDiv = styled.div`
	${ChatDivStyle};
`;

const ChatDivLink = styled(Link)`
	${ChatDivStyle};
`;

const Chatstyle = styled.div`
	max-width: 40rem;
	width: 100%;
	@media ${({ theme }) => theme.size.mobile} {
		max-width: 15.5rem;
		width: 100%;
	}
`;

const ChatName = styled.p`
	font-weight: 700;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.textColor};
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;
const ChatContent = styled.p`
	font-weight: 300;
	color: ${({ theme }) => theme.grayColor2};
	font-size: 1.6rem;
	word-break: break-all;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

const ChatDate = styled(ChatContent)`
	font-size: 1.4rem;
	position: absolute;
	right: 1.5rem;
	bottom: 1.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.2rem;
	}
`;

export {
	ChatDivStyle,
	ChatContainer,
	ChatDiv,
	Chatstyle,
	ChatName,
	ChatContent,
	ChatDate,
	ChatDivLink,
};
