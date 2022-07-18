import React from 'react';
import styled from 'styled-components';
import {
	Profilestyle,
	ProfileName,
	SmallProfileEmail,
} from '../common/ProfileName.style';
import Profile from '../../assets/profile.png';

const ProfileDiv = styled.div`
	display: flex;
	padding: 3rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
`;

const ProfileImg = styled.img`
	width: 18rem;
	margin-right: 2.8rem;
`;

const ProfileText = styled.p`
	font-weight: 400;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor1};
	margin-top: 1rem;
	margin-bottom: 2.2rem;
`;

const ProfileFollow = styled.dl`
	display: flex;
`;

const Followers = styled.dt`
	font-weight: 300;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor1};
	display: flex;
	align-items: center;
	float: left;
`;

const Following = styled(Followers)`
	margin-left: 2rem;
`;

const FollowNumStyle = styled.dd`
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
	font-size: 2rem;
	margin-left: 0.5rem;
`;

const TextDiv = styled.div`
	word-break: break-all;
`;

const Imgdiv = styled.div`
	margin: auto 0;
`;

function ProfileInfo() {
	return (
		<>
			<ProfileDiv>
				<Imgdiv>
					<ProfileImg src={Profile} />
				</Imgdiv>

				<Profilestyle>
					<TextDiv>
						<ProfileName>애월읍 위니브 책농장</ProfileName>
						<SmallProfileEmail>@ weniv_Mandarin</SmallProfileEmail>

						<ProfileText>
							애월읍 감귤 전국 배송, 귤따기 체험, 감귤농장
						</ProfileText>
					</TextDiv>
					<ProfileFollow>
						<Followers>followers</Followers>
						<FollowNumStyle>2950</FollowNumStyle>

						<Following>floowings</Following>
						<FollowNumStyle>128</FollowNumStyle>
					</ProfileFollow>
				</Profilestyle>
			</ProfileDiv>
		</>
	);
}

export default ProfileInfo;
