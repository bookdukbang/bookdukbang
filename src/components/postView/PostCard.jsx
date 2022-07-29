import React, { useEffect, useState } from 'react';
import User from '../common/user/User';
import MoreBtns from '../../assets/moreBtn.png';
import LikeButton from '../common/LikeButton';
import {
	UserWrap,
	PostText,
	PostCardWrap,
	ReactionWrap,
	MoreBtn,
} from './PostCard.style';

function PostCard({ postContext, setModalInfo }) {
	const [writeDate, setWriteDate] = useState('');

	useEffect(() => {
		setWriteDate(postContext.createdAt.slice(0, 10).split('-'));
	}, []);

	const onClickMoreBtn = () => {
		setModalInfo((cur) => ({
			...cur,
			state: true,
			postUser: postContext.author.accountname,
		}));
	};

	return (
		<PostCardWrap>
			<UserWrap>
				<User author={postContext.author} />
			</UserWrap>
			<PostText>{postContext.content}</PostText>

			<ReactionWrap>
				<LikeButton
					hearted={postContext.hearted}
					heartCount={postContext.heartCount}
					id={postContext.id}
				/>

				<dt>
					<span>댓글</span>
				</dt>
				<dd>{postContext.commentCount}</dd>
				<dt>
					<span>작성 날짜</span>
				</dt>
				<dd>
					{writeDate[0]}년 {writeDate[1]}월 {writeDate[2]}일
				</dd>
			</ReactionWrap>
			<MoreBtn type="button" onClick={onClickMoreBtn}>
				<img src={MoreBtns} alt="더보기" />
			</MoreBtn>
		</PostCardWrap>
	);
}
export default PostCard;
