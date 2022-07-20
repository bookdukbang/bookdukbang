import React from 'react';
import styled from 'styled-components';
import {
	ProfileName,
	Profilestyle,
	SmallProfileEmail,
} from '../common/ProfileName.style';
import { SmallBtn, SmallBtnDiv } from '../common/Button.style';
import { NoneProfileMedium } from '../common/user/UserUpload';
import share from '../../assets/share.png';
import chat from '../../assets/chat.png';

const ProfileDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
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
		right: 3rem;
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

const InfoDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	@media ${({ theme }) => theme.size.mobile} {
		position: relative;
	}
`;

const Btns = styled.div`
	display: flex;
	gap: 1.5rem;
	justify-content: center;
`;

const SmallBtnDivStyle = styled(SmallBtnDiv)`
	margin: 2rem 0 0;
`;

const ShareBtn = styled(SmallBtn)`
	padding: 1.2rem 2rem;
	background-color: ${({ theme }) => theme.whiteColor};
	color: ${({ theme }) => theme.grayColor2};
	border: 1px solid ${({ theme }) => theme.grayColor4};
	width: 12rem;
	& img {
		width: 2.5rem;
		margin-right: 0.7rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		width: 3.8rem;
		height: 3.8rem;
		border-radius: 50%;
		text-align: center;
		position: relative;
		& span {
			${({ theme }) => theme.a11yHidden()}
		}
		& img {
			position: absolute;
			width: 1.6rem;
			top: 1rem;
			left: 1.2rem;
		}
	}
`;

const FollowBtn = styled(SmallBtn)`
	padding: 1.3rem 13.7rem;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 0.7rem 3.7rem;
	}
`;

function UserProfileInfo() {
	return (
		<>
			<ProfileDiv>
				<InfoDiv>
					<NoneProfileMediumStyle />

					<Profilestyle>
						<TextDiv>
							<ProfileName>애월읍 위니브 책농장</ProfileName>
							<SmallProfileEmail>
								@ weniv_Mandarin
							</SmallProfileEmail>

							<ProfileText>
								애월읍 감귤 전국 배송, 귤따기 체험, 감귤농장
							</ProfileText>
						</TextDiv>

						<Follow>
							<ProfileFollow>
								<Followers>followers</Followers>
								<FollowNumStyle>2950</FollowNumStyle>
							</ProfileFollow>
							<ProfileFollowing>
								<Followers>followings</Followers>
								<FollowNumStyle>128</FollowNumStyle>
							</ProfileFollowing>
						</Follow>
					</Profilestyle>
				</InfoDiv>
				<Btns>
					<SmallBtnDivStyle>
						<ShareBtn type="button">
							<img src={share} alt="공유하기" />
							<span>Share</span>
						</ShareBtn>
					</SmallBtnDivStyle>
					<SmallBtnDivStyle>
						<FollowBtn type="button">팔로우</FollowBtn>
					</SmallBtnDivStyle>
					<SmallBtnDivStyle>
						<ShareBtn type="button">
							<img src={chat} alt="채팅" />
							<span>Chat</span>
						</ShareBtn>
					</SmallBtnDivStyle>
				</Btns>
			</ProfileDiv>
		</>
	);
}

export default UserProfileInfo;
