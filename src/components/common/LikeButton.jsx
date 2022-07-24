import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Heart from '../../assets/heart.png';
import RedHeart from '../../assets/redheart.png';
import { SERVER_URL } from '../../constants';

const HeartImg = styled.img`
	width: 2rem;
	height: 2rem;
	margin-right: 0.6rem;
`;

const RedHeartImg = styled.img`
	width: 2rem;
	height: 2rem;
	margin-right: 0.6rem;
`;

const HeartNum = styled.dd`
	margin-right: 0.2rem;
	font-weight: 700;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor1};
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

	const [like, setLike] = useState(hearted);
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
			setLike(result.post.hearted);
			setLikeNum(result.post.heartCount);
		} catch (error) {
			console.log(error);
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
			setLike(result.post.hearted);
			setLikeNum(result.post.heartCount);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<dt>
				<LikeBtn
					type="button"
					onClick={like ? onCancelheartedBtn : onClickheartedBtn}
				>
					{like ? (
						<RedHeartImg src={RedHeart} alt="빨간하트" />
					) : (
						<HeartImg src={Heart} alt="빈하트" />
					)}
				</LikeBtn>
			</dt>
			<HeartNum> {LikeNum}</HeartNum>
		</>
	);
}

export default LikeButton;
