import React from 'react';
import { NavigatorWrap, MenuBtn, PostingBtn } from './NavigatorMenu.style';
import { ReactComponent as HomeIcon } from '../../assets/icon_home.svg';
import { ReactComponent as ChatIcon } from '../../assets/icon_message.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as UserIcon } from '../../assets/icon_user.svg';

function NavigatorMenu() {
	return (
		<>
			<NavigatorWrap>
				<MenuBtn to="/">
					<HomeIcon />
					<span>HOME</span>
				</MenuBtn>
				<MenuBtn to="/chat">
					<ChatIcon />
					<span>CHAT</span>
				</MenuBtn>
				<PostingBtn to="/postUplod">
					<span>포스팅 올리기</span>
				</PostingBtn>

				<MenuBtn to="/search">
					<SearchIcon />
					<span>SEARCH</span>
				</MenuBtn>

				<MenuBtn to="/myprofile">
					<UserIcon />
					<span>PROFILE</span>
				</MenuBtn>
			</NavigatorWrap>
		</>
	);
}
export default NavigatorMenu;
