import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import NoneProfile from '../../../assets/profile.png';
import { useCommentAxios } from '../../../hooks/useCommentAxios';
import { WriteForm, UserProfileImg, WriteInput, WriteBtn } from './CommentForm.style';

function CommentForm({ setIsCommentUpload }) {
	const userInfo = JSON.parse(sessionStorage.getItem('user'));
	const [isDisabled, setIsDisabled] = useState(true);
	const [commentVal, setCommentVal] = useState('');
	const { postComment } = useCommentAxios();
	const { id } = useParams();

	useEffect(() => {
		if (commentVal === '') {
			setIsDisabled(true);
		} else {
			setIsDisabled(false);
		}
	}, [commentVal]);

	const onChangeComment = (e) => {
		setCommentVal(e.target.value);
	};

	// form submit event
	const onSubmitForm = useCallback(
		(e) => {
			e.preventDefault();
			if (!isDisabled) {
				postComment(id, commentVal).then(() => {
					setIsCommentUpload(true);
					setCommentVal('');
				});
			}
		},
		[commentVal],
	);

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
