import React from 'react';
import NoneProfile from '../../../assets/profile.png';
import {
	WriteForm,
	UserProfileImg,
	WriteInput,
	WriteBtn,
} from './CommentForm.style';

function CommentForm() {
	return (
		<WriteForm>
			<fieldset>
				<legend>댓글 작성하고 등록하기</legend>
				<UserProfileImg src={NoneProfile} alt={'ss'} />
				<label htmlFor="WriteComment">댓글 작성</label>
				<WriteInput
					type="text"
					placeholder="댓글 입력하기..."
					id="WriteComment"
				/>
				<WriteBtn type="submit" disabled>
					게시
				</WriteBtn>
			</fieldset>
		</WriteForm>
	);
}
export default CommentForm;
