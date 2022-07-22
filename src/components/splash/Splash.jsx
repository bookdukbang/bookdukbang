import React from 'react';
import { TitleStyle, Maintitle, Subtitle } from './SplashTitle.style';
import { SplashBtnDiv, SplashBtn } from './SplashButton.style';

function Splash({ setIsNext }) {
	const onClickNextPageBtn = () => {
		setIsNext(true);
	};

	return (
		<>
			<TitleStyle>
				<Maintitle>노래하며 수 가슴에 할지니, </Maintitle>
				<Maintitle>이것을 싹이 타오르고 듣는다.</Maintitle>
				<Subtitle>보라. 없는 착목한는 광야에서 이것이다.</Subtitle>
			</TitleStyle>

			<SplashBtnDiv>
				<SplashBtn type="button" onClick={onClickNextPageBtn}>
					다양한 친구들을 만나보세요!
				</SplashBtn>
			</SplashBtnDiv>
		</>
	);
}

export default Splash;
