import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../../constants';
import NoneProfile from '../../../assets/profile.png';
import { WriteForm, UserProfileImg, WriteInput, WriteBtn } from './CommentForm.style';

function CommentForm({ postId, setIsCommentUpload, userInfo }) {
	const navigate = useNavigate();
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
			if (json.status === 404) {
				throw navigate('/error');
			}
			setIsCommentUpload(true);
			setCommentVal('');
			return json;
		} catch (err) {
			console.error(err);
		}
	}

	const onChangeComment = (e) => {
		setCommentVal(e.target.value);
	};

	// form submit event
	const onSubmitForm = (e) => {
		e.preventDefault();
		if (!isDisabled) {
			commentAPI();
		}
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
