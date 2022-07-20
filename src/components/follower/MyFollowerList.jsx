import React from 'react';
import styled from 'styled-components';
import Profile from '../../assets/chatprofile.png';
import { ButtonStyle } from '../common/Button.style';
import { ProfileName, ProfileEmail } from '../common/ProfileName.style';

const ProfileImg = styled.img`
	width: 5.2rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 4rem;
	}
`;

const Name = styled(ProfileName)`
	${({ theme }) => theme.TextShortening()};
`;

const Accountname = styled(ProfileEmail)`
	font-size: 1.6rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

const FollowerDiv = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	border-radius: 10px;
	padding: 1rem 1.5rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	margin-bottom: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		margin-bottom: 1rem;
	}
`;

const FollowBtn = styled(ButtonStyle)`
	display: none;
	width: 8rem;
	font-size: 1.4rem;
	padding: 0.5rem 2rem;
	position: absolute;
	right: 1.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		display: block;
	}
`;

const FollowingBtn = styled(FollowBtn)`
	background-color: ${({ theme }) => theme.bgMainColor};
	color: ${({ theme }) => theme.mainColor};
	border: 0.1rem solid ${({ theme }) => theme.mainColor};
`;

const ProfileStyle = styled.div`
	margin-left: 1rem;
	max-width: 50rem;
	@media ${({ theme }) => theme.size.mobile} {
		margin-left: 0.7rem;
		max-width: 17rem;
	}
`;

function MyFollowerList() {
	return (
		<ul>
			<li>
				<FollowerDiv>
					<ProfileImg src={Profile} alt="프로필" />
					<ProfileStyle>
						<Name>애월읍 위니브 감귤농장</Name>
						<Accountname>@ weniv_Mandarin</Accountname>
					</ProfileStyle>

					<FollowBtn type="button">팔로우</FollowBtn>
				</FollowerDiv>
			</li>
			<li>
				<FollowerDiv>
					<ProfileImg src={Profile} alt="프로필" />
					<ProfileStyle>
						<Name>애월읍 위니브 감귤농장</Name>
						<Accountname>@ weniv_Mandarin</Accountname>
					</ProfileStyle>

					<FollowingBtn type="button">팔로잉</FollowingBtn>
				</FollowerDiv>
			</li>
			<li>
				<FollowerDiv>
					<ProfileImg src={Profile} alt="프로필" />
					<ProfileStyle>
						<Name>애월읍 위니브 감귤농장</Name>
						<Accountname>@ weniv_Mandarin</Accountname>
					</ProfileStyle>

					<FollowBtn type="button">팔로우</FollowBtn>
				</FollowerDiv>
			</li>
		</ul>
	);
}

export default MyFollowerList;
