import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	ProfileName,
	BigProfileEmail,
	Profilestyle,
} from '../common/ProfileName.style';
import MoreBtns from '../../assets/moreBtn.png';
import Heart from '../../assets/heart.png';
import Comment from '../../assets/comment.png';
import { NoneProfileSmall } from '../common/user/UserUpload';
import { SERVER_URL } from '../../constants';
import { Link } from 'react-router-dom';
import MyModal from './MyModal';

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

const BookListImg = styled.img`
	width: 68rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 34rem;
	}
`;

const HeartImg = styled.img`
	width: 1.6rem;
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
	align-items: center;
`;

const HeartNum = styled.p`
	margin-left: 0.7rem;
	margin-right: 1.2rem;
	font-weight: 700;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor1};
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
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

function MyFeed() {
	const token = JSON.parse(localStorage.getItem('user')).token;
	const MyAccountName = JSON.parse(localStorage.getItem('user')).accountname;
	const [feeds, setFeeds] = useState(null);
	const [postId, setPostId] = useState('');

	const [modalInfo, setModalInfo] = useState({
		state: false,
		postId: null,
		commentUser: null,
	});

	useEffect(() => {
		myFeeds();
	}, []);

	async function myFeeds() {
		try {
			const feedRes = await fetch(
				SERVER_URL + `/post/${MyAccountName}/userpost`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-type': 'application/json',
					},
				},
			);
			const feedResult = await feedRes.json();
			setFeeds(feedResult.post);
			setPostId(feedResult.post.id);
		} catch (error) {
			console.error(error);
		}
	}

	const onClickMoreBtn = () => {
		setModalInfo({
			state: true,
			postId: postId,
			// commentUser: e.target.parentNode.children[1].textContent,
		});
	};

	return (
		<>
			{feeds !== null &&
				feeds?.map((item) => (
					<FeedWrapper key={item.id}>
						<ProfileDiv>
							<NoneProfileSmall
								style={{
									backgroundImage: `url(${item.author.image})`,
								}}
							/>
							<ProfilestyleDiv>
								<ProfileName>
									{item.author.username}
								</ProfileName>
								<BigProfileEmail>
									@ {item.author.accountname}
								</BigProfileEmail>
							</ProfilestyleDiv>
						</ProfileDiv>

						<FeedText>{item.content}</FeedText>

						<BookListImg src={item.image} alt="책 이미지" />

						<CommentDiv>
							<HeartInfo>
								<HeartImg src={Heart} alt="좋아요" />
								<HeartNum>{item.heartCount}</HeartNum>
							</HeartInfo>
							<Link to={`/post/${item.id}`}>
								<CommentInfo>
									<CommentImg src={Comment} alt="댓글" />
									<CommentNum>{item.commentCount}</CommentNum>
								</CommentInfo>
							</Link>
							<Date>
								{item.createdAt.slice(0, 4)}년{' '}
								{item.createdAt.slice(5, 7)}월{' '}
								{item.createdAt.slice(8, 10)}일
							</Date>
						</CommentDiv>
						<MoreBtn type="button" onClick={onClickMoreBtn}>
							<MoreBtnImg src={MoreBtns} alt="더보기" />
						</MoreBtn>
						{modalInfo.state && (
							<MyModal
								postId={item.id}
								// userInfo={userInfo}
								modalInfo={modalInfo}
								setModalInfo={setModalInfo}
								// setIsCommentUpload={setIsCommentUpload}
							/>
						)}
					</FeedWrapper>
				))}
		</>
	);
}

export default MyFeed;
