import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Heart from '../../assets/heart.png';
import RedHeart from '../../assets/redheart.png';
import { SERVER_URL } from '../../constants';

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
	const [userInfo, setUserInfo] = useState(null);
	useEffect(() => {
		setUserInfo(JSON.parse(localStorage.getItem('user')));
	}, []);

	const [isLike, setIsLike] = useState(hearted);
	const [LikeNum, setLikeNum] = useState(heartCount);

	async function onClickheartedBtn() {
		const reqPath = `/post/${id}/heart`;
		const headers = {
			Authorization: `Bearer ${userInfo.token}`,
			'Content-type': 'application/json',
		};

		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				headers: headers,
			});
			const result = await res.json();
			setIsLike(result.post.hearted);
			setLikeNum(result.post.heartCount);
		} catch (error) {
			console.error(error);
		}
	}

	async function onCancelheartedBtn() {
		const reqPath = `/post/${id}/unheart`;
		const headers = {
			Authorization: `Bearer ${userInfo.token}`,
			'Content-type': 'application/json',
		};
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'DELETE',
				headers: headers,
			});
			const result = await res.json();
			setIsLike(result.post.hearted);
			setLikeNum(result.post.heartCount);
		} catch (error) {
			console.error;
		}
	}

	return (
		<>
			<dt>
				<LikeBtn
					type="button"
					onClick={isLike ? onCancelheartedBtn : onClickheartedBtn}
				>
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
