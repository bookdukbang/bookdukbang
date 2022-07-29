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
				<Maintitle>책을 교환하다, </Maintitle>
				<Maintitle>마음을 교환하다.</Maintitle>
				<Subtitle>나눔서점, BOOK덕방과 함께해요</Subtitle>
			</TitleStyle>

			<SplashBtnDiv>
				<SplashBtn type="button" onClick={onClickNextPageBtn}>
					다양한 북더기들을 만나보세요!
				</SplashBtn>
			</SplashBtnDiv>
		</>
	);
}

export default Splash;
