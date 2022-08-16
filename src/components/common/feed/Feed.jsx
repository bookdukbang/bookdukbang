import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileName, BigProfileEmail } from '../ProfileName.style';
import MoreBtns from '../../../assets/moreBtn.png';
import Comment from '../../../assets/comment.png';
import { NoneProfileSmall } from '../user/UserUpload';
import PostViewImg from '../post/PostViewImg';
import FeedModal from './FeedModal';
import LikeButton from '../LikeButton';
import {
	FeedWrapper,
	ProfileDiv,
	MoreBtnImg,
	CommentImg,
	FeedText,
	CommentDiv,
	HeartInfo,
	CommentInfo,
	CommentNum,
	Date,
	MoreBtn,
	ProfilestyleDiv,
} from './Feed.style';

function Feed({ item, author }) {
	const [modalInfo, setModalInfo] = useState({
		state: false,
		postUser: null,
		postId: null,
	});
	const onClickMoreBtn = () => {
		setModalInfo({
			state: true,
			postUser: author.accountname,
			postId: item.id,
		});
	};

	return (
		<>
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

				{'image' in item && item.image !== '' && (
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
						{item.createdAt.slice(0, 4)}년{item.createdAt.slice(5, 7)}월
						{item.createdAt.slice(8, 10)}일
					</Date>
				</CommentDiv>
				<MoreBtn type="button" onClick={onClickMoreBtn}>
					<MoreBtnImg src={MoreBtns} alt="더보기" />
				</MoreBtn>
				{modalInfo.state && (
					<FeedModal postId={item.id} modalInfo={modalInfo} setModalInfo={setModalInfo} />
				)}
			</FeedWrapper>
		</>
	);
}

export default Feed;
