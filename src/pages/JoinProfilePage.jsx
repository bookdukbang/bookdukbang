import React from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/Footer';
import MainTitle from '../components/common/MainTitle';

import JoinProfileForm from '../components/join/JoinProfileForm';

import { ProfileArticle } from '../components/join/JoinProfile.style';
import Wrap from '../components/common/Wrap';

function JoinProfile() {
	return (
		<>
			<Header />
			<Wrap>
				<ProfileArticle>
					<MainTitle
						firstText="프로필 정보를 입력해주세요. :)"
						thirdText={'나중에 언제든지 변경할 수 있습니다!'}
					/>
					<JoinProfileForm />
				</ProfileArticle>
			</Wrap>
			<Footer />
		</>
	);
}

export default JoinProfile;
