import React, { useContext } from 'react';
import styled from 'styled-components';
import DarkIcon from '../../assets/icon_dark.png';
import LightIcon from '../../assets/icon_light.png';
import { ThemeModeContext } from '../../context/ThemeModeContext';

const ModeBtn = styled.button`
	width: 7rem;
	height: 7rem;
	position: fixed;
	right: 4rem;
	bottom: 4rem;
	z-index: 1000;
	background-color: ${({ theme }) => theme.mainColor};
	border: none;
	border-radius: 50rem;

	& img {
		width: 80%;
	}

	@media ${({ theme }) => theme.size.mobile} {
		width: 4rem;
		height: 4rem;
		position: static;
		right: auto;
		bottom: auto;
		display: ${({ isMain }) => (isMain ? 'none' : 'block')};
	}
`;

function DarkModeBtn({ isMain }) {
	const { mode, setMode } = useContext(ThemeModeContext);
	const onClickMode = () => {
		if (mode === 'light') {
			setMode('dark');
			localStorage.setItem('mode', JSON.stringify('dark'));
		} else {
			setMode('light');
			localStorage.setItem('mode', JSON.stringify('light'));
		}
	};
	return (
		<ModeBtn isMain={isMain} type="button" onClick={onClickMode}>
			{mode === 'light' ? (
				<img src={LightIcon} alt="다크모드로 바꾸기" />
			) : (
				<img src={DarkIcon} alt="라이트모드로 바꾸기" />
			)}
		</ModeBtn>
	);
}
export default DarkModeBtn;
