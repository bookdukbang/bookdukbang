import React from 'react';
import styled from 'styled-components';
import { ErrorText, InputStyle, LabelStyle } from '../../common/Input.style';

const InputWrap = styled.div`
	margin-bottom: 1rem;
`;

function EditAccount({ editInfo, setEditInfo, errorInfo, setErrorInfo }) {
	const onChangeAccountname = (e) => {
		validation(e.target.value);
		setEditInfo((cur) => ({ ...cur, accountname: e.target.value }));
	};
	// accountname 유효성 검사
	function validation(accountname) {
		const regexp = /^[0-9a-zA-Z._]*$/g;
		if (accountname === '') {
			setErrorInfo((cur) => ({
				...cur,
				accountname: {
					state: true,
					message: '필수 입력사항을 입력해주세요.',
				},
			}));
			return false;
		} else if (!regexp.test(accountname)) {
			setErrorInfo((cur) => ({
				...cur,
				accountname: {
					state: true,
					message:
						'계정 ID는 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
				},
			}));
			return false;
		} else {
			setErrorInfo((cur) => ({
				...cur,
				accountname: {
					state: false,
					message: '',
				},
			}));
			return true;
		}
	}
	return (
		<InputWrap>
			<LabelStyle htmlFor="userAccount">계정 ID</LabelStyle>
			<InputStyle
				type="text"
				id="userAccount"
				name="userAccount"
				placeholder="영문, 숫자, 특수문자(.,_)만 사용합니다."
				value={editInfo.accountname}
				onChange={onChangeAccountname}
				className={`${errorInfo.accountname.state ? 'error' : ''}`}
				required
			/>
			{errorInfo.accountname.state && (
				<ErrorText>{errorInfo.accountname.message}</ErrorText>
			)}
		</InputWrap>
	);
}
export default EditAccount;
