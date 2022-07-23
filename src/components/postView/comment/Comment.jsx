import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NoneProfile from '../../../assets/profile.png';
const CommentLi = styled.li`
	font-size: 1.6rem;
	& + li {
		margin-top: 3rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
		& + div {
			margin-top: 1rem;
		}
	}
`;
const UserProfileImg = styled.img`
	border-radius: 50rem;
	border: 0.1rem solid ${({ theme }) => theme.grayColor4};
	width: 4rem;
	height: 4rem;
	box-sizing: border-box;
	float: left;
	margin-right: 1rem;
	background-color: ${({ theme }) => theme.grayColor4};

	@media ${({ theme }) => theme.size.mobile} {
		width: 3rem;
		height: 3rem;
		margin-right: 0.7rem;
	}
`;

const UserName = styled(Link)`
	grid-column: 2 / 3;
	font-weight: 700;
`;

const CommentTime = styled.span`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor2};
	font-weight: 300;

	&::before {
		content: '';
		display: inline-block;
		margin: 0 0.5rem;
		width: 0.3rem;
		height: 0.3rem;
		vertical-align: middle;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.grayColor2};
	}

	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.2rem;
	}
`;

const UserComment = styled.p`
	font-weight: 300;
`;

function Comment({ commentInfo }) {
	const [writeAuthor, setWriteAuthor] = useState(null);
	const [writeDate, setWriteDate] = useState(null);
	const [writeTime, setWriteTime] = useState(null);

	useEffect(() => {
		setWriteAuthor(commentInfo.author);
		setWriteDate(commentInfo.createdAt);
	}, []);

	useEffect(() => {
		if (writeAuthor !== null) {
			if (!writeAuthor.image) {
				writeAuthor.image = NoneProfile;
			}
			if (!writeAuthor.username) {
				writeAuthor.username = '(알수없음)';
			}
		}
	}, [writeAuthor]);

	useEffect(() => {
		if (writeDate !== null) {
			const getTimeGap = (time) => {
				const ms = Date.parse(time);
				const now = Date.now();
				const gap = (now - ms) / 1000;
				if (gap < 60) return `${parseInt(gap)}초`;
				else if (gap < 3600) return `${parseInt(gap / 60)}분`;
				else if (gap < 86400) return `${parseInt(gap / 3600)}시간`;
				else if (gap < 2592000) return `${parseInt(gap / 86400)}일`;
				else return `${parseInt(gap / 2592000)}달`;
			};
			setWriteTime(getTimeGap(writeDate));
		} else {
			setWriteTime('0초');
		}
	}, [writeDate]);

	return (
		<>
			{writeAuthor && (
				<CommentLi>
					<Link to={'/profile/' + writeAuthor.accountname}>
						<UserProfileImg
							src={writeAuthor.image}
							alt={writeAuthor.username}
						/>
					</Link>
					<UserName to={'/profile/' + writeAuthor.accountname}>
						{writeAuthor.username}
					</UserName>
					<CommentTime>{writeTime} 전</CommentTime>
					<UserComment>{commentInfo.content}</UserComment>
				</CommentLi>
			)}
		</>
	);
}
export default Comment;
