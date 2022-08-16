import React, { useState } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';
import Heart from '../../assets/heart.png';
import RedHeart from '../../assets/redheart.png';
import { useLike } from '../../hooks/useLike';

const HeartImg = styled.img`
	padding-top: 0.4rem;
	width: 1.5rem;
	margin-right: 0.7rem;
	@media ${({ theme }) => theme.size.mobile} {
		padding-top: 0.2rem;
	}
`;

const RedHeartImg = styled.img`
	padding-top: 0.4rem;
	width: 1.6rem;
	margin-right: 0.7rem;
	@media ${({ theme }) => theme.size.mobile} {
		padding-top: 0.2rem;
	}
`;

const HeartNum = styled.dd`
	margin-right: 1.2rem;
	font-weight: 700;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor1};
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

const LikeBtn = styled.button`
	padding: 0;
	border: none;
	background-color: transparent;
`;

function LikeButton({ hearted, heartCount, id }) {
	const [isLike, setIsLike] = useState(hearted);
	const { likepost, dislikepost } = useLike();
	const [LikeNum, setLikeNum] = useState(heartCount);

	const onClickLikeBtn = useCallback(() => {
		if (isLike) {
			dislikepost(id).then((heartedInfo) => {
				setIsLike(heartedInfo.hearted);
				setLikeNum(heartedInfo.heartCount);
			});
		} else {
			likepost(id).then((heartedInfo) => {
				setIsLike(heartedInfo.hearted);
				setLikeNum(heartedInfo.heartCount);
			});
		}
	}, [isLike]);

	return (
		<>
			<dt>
				<LikeBtn type="button" onClick={onClickLikeBtn}>
					{isLike ? (
						<RedHeartImg src={RedHeart} alt="좋아요취소" />
					) : (
						<HeartImg src={Heart} alt="좋아요" />
					)}
				</LikeBtn>
			</dt>
			<HeartNum> {LikeNum}</HeartNum>
		</>
	);
}

export default LikeButton;
