import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	ProfileName,
	BigProfileEmail,
	Profilestyle,
} from './ProfileName.style';
import MoreBtns from '../../assets/moreBtn.png';
import Comment from '../../assets/comment.png';
import { NoneProfileSmall } from './user/UserUpload';
import PostViewImg from './post/PostViewImg';
import FeedModal from './feed/FeedModal';
import LikeButton from '../common/LikeButton';

const FeedWrapper = styled.div`
	padding: 3rem 2rem 4.8rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	margin-bottom: 3rem;
	border-radius: 1rem;
	position: relative;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 2rem 1.5rem 2.4rem;
	}
`;

const ProfileDiv = styled.div`
	display: flex;
`;

const MoreBtnImg = styled.img`
	width: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 2.4rem;
	}
`;

const CommentImg = styled.img`
	width: 1.5rem;
`;

const FeedText = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-weight: 400;
	font-size: 2rem;
	margin: 2.5rem auto 2rem;
	box-sizing: border-box;
	word-break: break-all;
	@media ${({ theme }) => theme.size.mobile} {
		font-weight: 400;
		font-size: 1.6rem;
	}
`;

const CommentDiv = styled.div`
	display: flex;
	margin-top: 1.8rem;
`;

const HeartInfo = styled.div`
	display: flex;
	align-items: flex-start;
`;

const CommentInfo = styled.div`
	display: flex;
	align-items: center;
`;

const CommentNum = styled.p`
	margin-left: 0.7rem;
	font-weight: 700;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor1};
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

const Date = styled.p`
	margin-left: auto;
	font-weight: 300;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor2};
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.2rem;
	}
`;

const MoreBtn = styled.button`
	width: 3rem;
	position: absolute;
	top: 3rem;
	right: 2rem;
	border: none;
	background-color: transparent;
`;

const ProfilestyleDiv = styled(Profilestyle)`
	@media ${({ theme }) => theme.size.mobile} {
		align-items: flex-start;
	}
`;

function Feed({ item, author, postId }) {
	const [modalInfo, setModalInfo] = useState({
		state: false,
		postUser: null,
		postId: null,
	});
	const onClickMoreBtn = () => {
		setModalInfo({
			state: true,
			postUser: author.accountname,
			postId: postId,
		});
	};

	return (
		<FeedWrapper>
			<ProfileDiv>
				<Link to={`/user/${author.accountname}`}>
					<NoneProfileSmall
						style={{
							backgroundImage: `url(${author.image})`,
						}}
					/>
				</Link>
				<ProfilestyleDiv>
					<ProfileName>{author.username}</ProfileName>
					<BigProfileEmail>@ {author.accountname}</BigProfileEmail>
				</ProfilestyleDiv>
			</ProfileDiv>

			<FeedText>{item.content}</FeedText>

			{item.image !== '' && (
				<PostViewImg uploadImgs={item.image.split(',')} isView={true} />
			)}

			<CommentDiv>
				<HeartInfo>
					<LikeButton
						hearted={item.hearted}
						heartCount={item.heartCount}
						id={item.id}
					/>
				</HeartInfo>
				<Link to={`/post/${item.id}`}>
					<CommentInfo>
						<CommentImg src={Comment} alt="댓글" />
						<CommentNum>{item.commentCount}</CommentNum>
					</CommentInfo>
				</Link>
				<Date>
					{item.createdAt.slice(0, 4)}년 {item.createdAt.slice(5, 7)}
					월 {item.createdAt.slice(8, 10)}일
				</Date>
			</CommentDiv>
			<MoreBtn type="button" onClick={onClickMoreBtn}>
				<MoreBtnImg src={MoreBtns} alt="더보기" />
			</MoreBtn>
			{modalInfo.state && (
				<FeedModal
					postId={item.id}
					modalInfo={modalInfo}
					setModalInfo={setModalInfo}
				/>
			)}
		</FeedWrapper>
	);
}

export default Feed;
