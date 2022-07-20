import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NoneProfile from '../../../assets/profile.png';
const CommentWrap = styled.li`
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
//{ profileUrl, userName, writeTime, userComment }
function Comment({ commentInfo }) {
	const [writeAuthor, setWriteAuthor] = useState(null);

	useEffect(() => {
		setWriteAuthor(commentInfo.author);
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

	return (
		<>
			{writeAuthor && (
				<CommentWrap>
					<Link to={'/profile/' + writeAuthor.accountname}>
						<UserProfileImg
							src={writeAuthor.image}
							alt={writeAuthor.username}
						/>
					</Link>
					<UserName to={'/profile/' + writeAuthor.accountname}>
						{writeAuthor.username}
					</UserName>
					<CommentTime>{'0'} 전</CommentTime>
					<UserComment>{commentInfo.content}</UserComment>
				</CommentWrap>
			)}
		</>
	);
}
export default Comment;
