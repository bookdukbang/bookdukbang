import React, { useEffect, useState } from 'react';
import { NavigatorWrap, MenuBtn, PostingBtn } from './NavigatorMenu.style';
import { ReactComponent as HomeIcon } from '../../assets/icon_home.svg';
import { ReactComponent as ChatIcon } from '../../assets/icon_message.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as UserIcon } from '../../assets/icon_user.svg';

function NavigatorMenu() {
	const [isMobile, setIsMobile] = useState(false);
	const MyAccountName = JSON.parse(sessionStorage.getItem('user')).accountname;
	window.addEventListener('resize', (e) => {
		if (e.target.innerWidth <= 390) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	});

	useEffect(() => {
		if (window.innerWidth <= 390) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<>
			{isMobile && (
				<NavigatorWrap>
					<MenuBtn to="/feed">
						<HomeIcon />
						<span>HOME</span>
					</MenuBtn>
					<MenuBtn to="/chat">
						<ChatIcon />
						<span>CHAT</span>
					</MenuBtn>
					<PostingBtn to="/post/upload">
						<span>포스팅 올리기</span>
					</PostingBtn>

					<MenuBtn to="/search">
						<SearchIcon />
						<span>SEARCH</span>
					</MenuBtn>

					<MenuBtn to={`/user/${MyAccountName}`}>
						<UserIcon />
						<span>PROFILE</span>
					</MenuBtn>
				</NavigatorWrap>
			)}
		</>
	);
}
export default NavigatorMenu;
