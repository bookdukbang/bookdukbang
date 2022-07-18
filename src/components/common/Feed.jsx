import React from 'react';
import styled from 'styled-components';
import BookList from '../../assets/BookListImg02.png';
import {
	ProfileName,
	BigProfileEmail,
	Profilestyle,
} from './ProfileName.style';
import MoreBtns from '../../assets/moreBtn.png';
import Heart from '../../assets/heart.png';
import Comment from '../../assets/comment.png';
import { NoneProfileSmall } from './user/UserUpload';

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
	color: #767676; // theme.js에 없어요 추가해주세요!
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
	color: #767676;
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

function Feed() {
	return (
		<FeedWrapper>
			<ProfileDiv>
				<NoneProfileSmall />
				<ProfilestyleDiv>
					<ProfileName>애월읍 위니브 감귤농장</ProfileName>
					<BigProfileEmail>@ weniv_Mandarin </BigProfileEmail>
				</ProfilestyleDiv>
			</ProfileDiv>
			<FeedText>
				옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
				뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
				넣는 풍부하게 뛰노는 인생의 힘있다.
			</FeedText>
			<BookListImg src={BookList} />

			<CommentDiv>
				<HeartInfo>
					<HeartImg src={Heart} />
					<HeartNum>58</HeartNum>
				</HeartInfo>
				<CommentInfo>
					<CommentImg src={Comment} />
					<CommentNum> 12</CommentNum>
				</CommentInfo>
				<Date>2020년 10월 21일</Date>
			</CommentDiv>
			<MoreBtn>
				<MoreBtnImg src={MoreBtns} />
			</MoreBtn>
		</FeedWrapper>
	);
}

export default Feed;
