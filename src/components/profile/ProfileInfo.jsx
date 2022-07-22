import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	Profilestyle,
	ProfileName,
	SmallProfileEmail,
} from '../common/ProfileName.style';
import setting from '../../assets/setting.png';
import { MediumBtn, MediumBtnDiv } from '../common/Button.style';
import {
	ImgUploadBtnMedium,
	ImgUploadMedium,
	NoneProfileMedium,
} from '../common/user/UserUpload';

const ProfileDiv = styled.div`
	display: flex;
	justify-content: center;
	padding: 3rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
	flex-wrap: wrap;
	@media ${({ theme }) => theme.size.mobile} {
		position: relative;
		padding-bottom: 2rem;
	}
`;

const NoneProfileMediumStyle = styled(NoneProfileMedium)`
	@media ${({ theme }) => theme.size.mobile} {
		margin: -6rem 0 1rem;
	}
`;

const ProfileText = styled.p`
	font-weight: 400;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.grayColor1};
	margin-top: 1rem;
	margin-bottom: 2.2rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.4rem;
	}
`;

const Follow = styled.div`
	display: flex;
`;

const ProfileFollow = styled.dl`
	display: flex;
	align-items: flex-end;
	@media ${({ theme }) => theme.size.mobile} {
		flex-direction: column-reverse;
		align-items: center;
		position: absolute;
		top: 2rem;
	}
`;

const ProfileFollowing = styled(ProfileFollow)`
	margin-left: 2rem;
	@media ${({ theme }) => theme.size.mobile} {
		right: 4.8rem;
	}
`;

const Followers = styled.dt`
	font-weight: 300;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.grayColor1};
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.2rem;
	}
`;

const FollowNumStyle = styled.dd`
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
	font-size: 2rem;
	margin-left: 0.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.mainColor};
	}
`;

const TextDiv = styled.div`
	word-break: break-all;
`;

const MediumBtnDivStyle = styled(MediumBtnDiv)`
	display: none;
	@media ${({ theme }) => theme.size.mobile} {
		display: block;
		max-width: 12rem;
	}
`;

function ProfileInfo() {
	return (
		<>
			<ProfileDiv>
				<NoneProfileMediumStyle>
					<ImgUploadBtnMedium type="button">
						<ImgUploadMedium
							src={setting}
							alt="내 프로필 수정 버튼"
						/>
					</ImgUploadBtnMedium>
				</NoneProfileMediumStyle>

				<Profilestyle>
					<TextDiv>
						<ProfileName>애월읍 위니브 책농장</ProfileName>
						<SmallProfileEmail>@ weniv_Mandarin</SmallProfileEmail>

						<ProfileText>
							애월읍 감귤 전국 배송, 귤따기 체험, 감귤농장
						</ProfileText>
						<MediumBtnDivStyle>
							<MediumBtn type="button">상품등록</MediumBtn>
						</MediumBtnDivStyle>
					</TextDiv>

					<Follow>
						<ProfileFollow>
							<Followers>followers</Followers>
							<FollowNumStyle>
								<Link to="/follower">2950</Link>
							</FollowNumStyle>
						</ProfileFollow>
						<ProfileFollowing>
							<Followers>followings</Followers>
							<FollowNumStyle>
								<Link to="/follower">128</Link>
							</FollowNumStyle>
						</ProfileFollowing>
					</Follow>
				</Profilestyle>
			</ProfileDiv>
		</>
	);
}

export default ProfileInfo;
