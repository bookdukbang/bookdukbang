import React from 'react';
import styled from 'styled-components';
import { InputStyle, LabelStyle } from '../../common/Input.style';

const InputWrap = styled.div`
	margin-bottom: 1rem;
`;

function EditIntro({ editInfo, setEditInfo }) {
	const onChageIntro = (e) => {
		setEditInfo((cur) => ({ ...cur, intro: e.target.value }));
	};
	return (
		<InputWrap>
			<LabelStyle htmlFor="userIntro">소개</LabelStyle>
			<InputStyle
				type="text"
				id="userIntro"
				name="userIntro"
				placeholder="자신에 대해 소개해 주세요!"
				value={editInfo.intro}
				onChange={onChageIntro}
			/>
		</InputWrap>
	);
}
export default EditIntro;
