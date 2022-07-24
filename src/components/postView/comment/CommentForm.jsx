import { SERVER_URL } from '../../../constants';
import React, { useState, useEffect } from 'react';
import NoneProfile from '../../../assets/profile.png';
import {
	WriteForm,
	UserProfileImg,
	WriteInput,
	WriteBtn,
} from './CommentForm.style';

function CommentForm({ postId, setIsCommentUpload, userInfo }) {
	const [isDisabled, setIsDisabled] = useState(true);
	const [commentVal, setCommentVal] = useState('');

	useEffect(() => {
		if (commentVal === '') {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [commentVal]);

	// 서버로 form 보내기
	async function commentAPI() {
		const reqPath = `/post/${postId}/comments`;
		const commentData = {
			comment: {
				content: commentVal,
			},
		};
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
					'Content-type': 'application/json',
				},
				body: JSON.stringify(commentData),
			});
			const json = await res.json();
			return json;
		} catch (err) {
			console.error(err.message);
		}
	}

	const onChangeComment = (e) => {
		setCommentVal(e.target.value);
	};

	// 댓글 작성하고 날리기
	const onSubmitForm = (e) => {
		e.preventDefault();
		commentAPI()
			.then(() => {
				setIsCommentUpload(true);
			})
			.finally(() => {
				setCommentVal('');
			});
	};

	return (
		<WriteForm method="POST" onSubmit={onSubmitForm}>
			<fieldset>
				<legend>댓글 작성하고 등록하기</legend>
				<UserProfileImg
					src={userInfo ? userInfo.image : NoneProfile}
					alt={userInfo ? userInfo.accountname : 'userNone'}
				/>
				<label htmlFor="WriteComment">댓글 작성</label>
				<WriteInput
					type="text"
					placeholder="댓글 입력하기..."
					onChange={onChangeComment}
					value={commentVal}
					id="WriteComment"
				/>
				<WriteBtn type="submit" disabled={isDisabled}>
					게시
				</WriteBtn>
			</fieldset>
		</WriteForm>
	);
}
export default CommentForm;
