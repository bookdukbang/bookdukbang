import React from 'react';
import styled from 'styled-components';
import { ErrorText, InputStyle, LabelStyle } from '../../common/Input.style';

const InputWrap = styled.div`
	margin-bottom: 1rem;
`;

function EditUsername({ editInfo, setEditInfo, errorInfo, setErrorInfo }) {
	const onChangeUsername = (e) => {
		validation(e.target.value);
		setEditInfo((cur) => ({ ...cur, username: e.target.value }));
	};

	// username 유효성 검사
	function validation(userName) {
		if (userName === '') {
			setErrorInfo((cur) => ({
				...cur,
				username: {
					state: true,
					message: '필수 입력사항을 입력해주세요.',
				},
			}));
			return false;
		} else if (userName < 2 || userName.length > 10) {
			setErrorInfo((cur) => ({
				...cur,
				username: {
					state: true,
					message: '사용자 이름은 2~10자 이내여야 합니다.',
				},
			}));
			return false;
		} else {
			setErrorInfo((cur) => ({
				...cur,
				username: {
					state: false,
					message: '',
				},
			}));
			return true;
		}
	}

	return (
		<InputWrap>
			<LabelStyle htmlFor="userName">사용자 이름</LabelStyle>
			<InputStyle
				type="text"
				id="userName"
				name="userName"
				placeholder="2~10자 이내여야 합니다."
				value={editInfo.username}
				onChange={onChangeUsername}
				className={`${errorInfo.username.state ? 'error' : ''}`}
				required
			/>
			{errorInfo.username.state && (
				<ErrorText>{errorInfo.username.message}</ErrorText>
			)}
		</InputWrap>
	);
}
export default EditUsername;
