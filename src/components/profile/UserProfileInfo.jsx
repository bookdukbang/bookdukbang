import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfileName, Profilestyle, SmallProfileEmail } from '../common/ProfileName.style';
import { SmallBtn, SmallBtnDiv } from '../common/Button.style';
import { NoneProfileMedium } from '../common/user/UserUpload';
import share from '../../assets/share.png';
import chat from '../../assets/chat.png';
import { SERVER_URL } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import UserFollowBtn from '../followList/UserFollowBtn';

const ProfileDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	padding: 3rem;
	background-color: ${({ theme }) => theme.bgMainColor};
	border-radius: 1rem;
`;

const InfoDiv = styled.div`
	display: flex;
	gap: 2.8rem;
	@media ${({ theme }) => theme.size.mobile} {
		position: relative;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}
`;

const NoneProfileMediumStyle = styled(NoneProfileMedium)`
	margin: 0;
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
		margin-bottom: 0;
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
		flex-direction: column-reverse;
		align-items: center;
		position: absolute;
		top: -1rem;
		left: 0;
	}
`;

const ProfileFollowing = styled.dl`
	display: flex;
	align-items: flex-end;

	@media ${({ theme }) => theme.size.mobile} {
		position: absolute;
		top: -1rem;
		right: 0;
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
	background-color: ${({ theme }) => theme.bgMainColor};
	color: ${({ theme }) => theme.grayColor2};
	border: 1px solid ${({ theme }) => theme.grayColor4};
	width: 12rem;
	& img {
		width: 2.5rem;
		margin-right: 0.7rem;
	}
	&:hover {
		background-color: ${({ theme }) => theme.bgsubColor};
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

function UserProfileInfo() {
	const token = JSON.parse(sessionStorage.getItem('user')).token;
	let { id } = useParams();
	const [user, setUser] = useState('');
	const [isfollow, setIsfollow] = useState(null);

	async function userProfile() {
		try {
			const res = await fetch(SERVER_URL + `/profile/${id}`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-type': 'application/json',
				},
			});
			const result = await res.json();
			setUser(result.profile);
			setIsfollow(result.profile.isfollow);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		userProfile();
	}, []);

	return (
		<>
			<ProfileDiv>
				<InfoDiv>
					<NoneProfileMediumStyle style={{ backgroundImage: `url(${user.image})` }} />

					<Profilestyle>
						<TextDiv>
							<ProfileName>{user.username}</ProfileName>
							<SmallProfileEmail>@ {user.accountname}</SmallProfileEmail>

							<ProfileText>{user.intro}</ProfileText>
						</TextDiv>

						<Follow>
							<ProfileFollow>
								<Followers>followers</Followers>
								<FollowNumStyle>
									<Link to={`/follower/${user.accountname}`}>
										{user.followerCount}
									</Link>
								</FollowNumStyle>
							</ProfileFollow>
							<ProfileFollowing>
								<Followers>followings</Followers>
								<FollowNumStyle>
									<Link to={`/following/${user.accountname}`}>
										{user.followingCount}
									</Link>
								</FollowNumStyle>
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
						<UserFollowBtn
							accountname={user.accountname}
							isfollow={isfollow}
							setIsfollow={setIsfollow}
						/>
					</SmallBtnDivStyle>
					<SmallBtnDivStyle>
						<ShareBtn as={Link} to="/chat">
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
