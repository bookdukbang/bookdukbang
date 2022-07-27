import React, { useEffect, useState } from 'react';
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
import { SERVER_URL } from '../../constants';

const ProfileDiv = styled.div`
	display: flex;
	justify-content: center;
	padding: 3rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
	flex-wrap: wrap;
	gap: 2.8rem;
	justify-content: flex-start;
	@media ${({ theme }) => theme.size.mobile} {
		position: relative;
		padding-bottom: 2rem;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}
`;

const DivStyle = styled.div`
	position: relative;
`;

const NoneProfileMediumStyle = styled(NoneProfileMedium)`
	@media ${({ theme }) => theme.size.mobile} {
		margin: -6rem 0 1rem;
	}
`;

const ImgUploadBtnMediumStyle = styled(ImgUploadBtnMedium)`
	@media ${({ theme }) => theme.size.mobile} {
		top: 3rem;
	}
`;

const ImgUploadMediumStyle = styled(ImgUploadMedium)`
	display: block;
	margin: 25% auto;
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
	gap: 2rem;
`;

const ProfileFollow = styled.dl`
	display: flex;
	align-items: flex-end;
	@media ${({ theme }) => theme.size.mobile} {
		position: absolute;
		top: 2rem;
		left: 4.8rem;
		flex-direction: column-reverse;
		align-items: center;
	}
`;

const ProfileFollowing = styled.dl`
	display: flex;
	align-items: flex-end;

	@media ${({ theme }) => theme.size.mobile} {
		position: absolute;
		top: 2rem;
		right: 4.8rem;
		flex-direction: column-reverse;
		align-items: center;
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
		width: 12rem;
	}
`;

function ProfileInfo() {
	const token = JSON.parse(localStorage.getItem('user')).token;

	const [myInfo, setMyInfo] = useState('');
	const [myId, setMyId] = useState('');

	async function myInformation() {
		try {
			const res = await fetch(SERVER_URL + '/user/myinfo', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const result = await res.json();
			setMyInfo(result.user);
			setMyId(result.user._id);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		myInformation();
	}, []);

	return (
		<>
			<ProfileDiv>
				<DivStyle>
					<NoneProfileMediumStyle
						style={{ backgroundImage: `url(${myInfo.image})` }}
					/>
					<ImgUploadBtnMediumStyle as={Link} to="/profileEdit">
						<ImgUploadMediumStyle
							src={setting}
							alt="내 프로필 수정 버튼"
						/>
					</ImgUploadBtnMediumStyle>
				</DivStyle>

				<Profilestyle>
					<TextDiv>
						<ProfileName>{myInfo.username}</ProfileName>
						<SmallProfileEmail>
							@ {myInfo.accountname}
						</SmallProfileEmail>

						<ProfileText>{myInfo.intro}</ProfileText>
						<MediumBtnDivStyle>
							<MediumBtn as={Link} to="/product">
								상품등록
							</MediumBtn>
						</MediumBtnDivStyle>
					</TextDiv>

					<Follow>
						<ProfileFollow>
							<Followers>followers</Followers>
							<FollowNumStyle>
								<Link to={`/follower/${myId}`}>
									{myInfo.followerCount}
								</Link>
							</FollowNumStyle>
						</ProfileFollow>
						<ProfileFollowing>
							<Followers>followings</Followers>
							<FollowNumStyle>
								<Link to={`/following/${myId}`}>
									{myInfo.followingCount}
								</Link>
							</FollowNumStyle>
						</ProfileFollowing>
					</Follow>
				</Profilestyle>
			</ProfileDiv>
		</>
	);
}

export default ProfileInfo;
