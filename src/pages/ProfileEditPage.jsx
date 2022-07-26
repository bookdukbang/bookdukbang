import React from 'react';
import Header from '../components/common/header/Header';
import Footer from '../components/common/Footer';
import MainTitle from '../components/common/MainTitle';
import { ProfileArticle } from '../components/join/JoinProfile.style';
import Wrap from '../components/common/Wrap';
import ProfileEdit from '../components/profile/edit/ProfileEdit';

function ProfileEditPage() {
	return (
		<>
			<Header />
			<Wrap>
				<ProfileArticle>
					<MainTitle firstText="프로필 수정" />
					<ProfileEdit />
				</ProfileArticle>
			</Wrap>
			<Footer />
		</>
	);
}
export default ProfileEditPage;
