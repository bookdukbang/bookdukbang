import React, { useState } from 'react';
import styled from 'styled-components';
import splashImg from '../assets/splashImg.png';
import SplashHeader from '../components/splash/SplashHeader';
import Wrap from '../components/common/Wrap';
import Footer from '../components/common/Footer';
import Splash from '../components/splash/Splash';
import SplashLogin from '../components/splash/SplashLogin';

const BackgroundImg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${splashImg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

const Container = styled(Wrap)`
	height: 80vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

function SplashPage() {
	const [isNext, setIsNext] = useState(false);
	return (
		<BackgroundImg>
			<SplashHeader />

			<Container>
				{isNext ? <SplashLogin /> : <Splash setIsNext={setIsNext} />}
			</Container>

			<Footer isHome />
		</BackgroundImg>
	);
}

export default SplashPage;
