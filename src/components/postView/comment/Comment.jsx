import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoneProfile from '../../../assets/profile.png';
import {
	CommentLi,
	UserProfileImg,
	UserName,
	CommentTime,
	UserComment,
	CommentMoreBtn,
} from './Comment.style';

function Comment({ commentInfo, setModalInfo }) {
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

	const onClickMoreBtn = (e) => {
		setModalInfo({
			state: true,
			commentId: e.target.parentNode.id,
			commentUser: e.target.parentNode.children[1].id,
		});
	};

	const onErrorImg = (e) => {
		e.target.src = NoneProfile;
	};

	return (
		<>
			{writeAuthor && (
				<CommentLi id={commentInfo.id}>
					<Link to={'/user/' + writeAuthor.accountname}>
						<UserProfileImg
							src={writeAuthor.image}
							alt={writeAuthor.username}
							onError={onErrorImg}
						/>
					</Link>
					<div id={writeAuthor.accountname}>
						<div>
							<UserName
								to={'/profile/' + writeAuthor.accountname}
							>
								{writeAuthor.username}
							</UserName>
							<CommentTime>{writeTime} 전</CommentTime>
						</div>
						<UserComment>{commentInfo.content}</UserComment>
					</div>
					<CommentMoreBtn type="button" onClick={onClickMoreBtn}>
						<span>더보기</span>
					</CommentMoreBtn>
				</CommentLi>
			)}
		</>
	);
}
export default Comment;
