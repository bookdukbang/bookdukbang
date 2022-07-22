import React from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/Footer';
import MainTitle from '../components/common/MainTitle';

import JoinProfileForm from '../components/join/JoinProfileForm';

import { ProfileArticle } from '../components/join/JoinProfile.style';
import Wrap from '../components/common/Wrap';

function ProfileEdit() {
	return (
		<>
			<Header />
			<Wrap>
				<ProfileArticle>
					<MainTitle firstText="프로필 수정" />
					<JoinProfileForm />
				</ProfileArticle>
			</Wrap>
			<Footer />
		</>
	);
}

export default ProfileEdit;
