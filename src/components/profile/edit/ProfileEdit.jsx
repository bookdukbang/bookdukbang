import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NoneProfileImg from '../../../assets/profile.png';
import FormWrap from '../../common/FormWrap.style';
import { BigBtn } from '../../common/Button.style';
import { NoneProfile } from '../../join/JoinProfile.style';
import PostUploadImg from '../../common/post/PostUploadImg';
import { SERVER_URL } from '../../../constants';
import EditUsername from './EditUsername';
import EditAccount from './EditAccount';
import EditIntro from './EditIntro';

const ProfileImgWrap = styled(NoneProfile)`
	margin-bottom: 3rem;

	& label {
		float: none;
		position: absolute;
		right: 0;
		bottom: 0;
	}
`;

function ProfileEdit() {
	const navigate = useNavigate();
	const [uploadImgs, setUploadImgs] = useState([]);
	const [userInfo, setUserInfo] = useState({
		isChange: false,
		info: JSON.parse(localStorage.getItem('user')),
	});
	const [errorInfo, setErrorInfo] = useState({
		username: {
			state: false,
			message: '',
		},
		accountname: {
			state: false,
			message: '',
		},
	});

	const [editInfo, setEditInfo] = useState({
		username: '',
		accountname: '',
		intro: '',
		image: '',
	});

	useEffect(() => {
		setEditInfo({
			username: userInfo.info.username,
			accountname: userInfo.info.accountname,
			intro: userInfo.info.intro,
			image: userInfo.info.image,
		});
	}, []);

	useEffect(() => {
		if (userInfo.isChange) {
			localStorage.setItem('user', JSON.stringify(userInfo.info));
			setUserInfo((cur) => ({ ...cur, isChange: false }));
			navigate(`/feed`);
		}
	}, [userInfo.isChange]);

	// 서버로 이미지 보내기
	async function imgServerAPI(file) {
		const formData = new FormData();
		formData.append('image', file);
		const reqPath = '/image/uploadfile';
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'POST',
				body: formData,
			});
			const json = await res.json();
			return json;
		} catch (err) {
			alert(err.message);
		}
	}

	// 이미지 파일이 업로드 되면 이미지 서버주소 받기
	useEffect(() => {
		if (uploadImgs.length !== 0) {
			imgServerAPI(uploadImgs)
				.then((d) => SERVER_URL + '/' + d.filename)
				.then((src) => setEditInfo((cur) => ({ ...cur, image: src })));
		}
	}, [uploadImgs]);

	// 서버로 form 보내기
	async function profileEditAPI() {
		const reqPath = '/user';
		const userData = {
			user: {
				...editInfo,
			},
		};
		try {
			const res = await fetch(SERVER_URL + reqPath, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${userInfo.info.token}`,
					'Content-type': 'application/json',
				},
				body: JSON.stringify(userData),
			});
			const json = await res.json();

			// 계정 ID 중복 에러
			if (json.status === 422) {
				throw setErrorInfo((cur) => ({
					...cur,
					accountname: {
						state: true,
						message: json.message,
					},
				}));
			}

			setUserInfo((cur) => ({
				isChange: true,
				info: {
					...cur.info,
					username: json.user.username,
					accountname: json.user.accountname,
					intro: json.user.intro,
					image: json.user.image,
				},
			}));
		} catch (err) {
			console.error(err);
		}
	}

	// form data submit
	const onSubmitForm = (e) => {
		e.preventDefault();
		profileEditAPI();
	};

	return (
		<FormWrap method="POST" onSubmit={onSubmitForm}>
			<ProfileImgWrap
				style={
					editInfo.image === ''
						? { backgroundImage: `url(${NoneProfileImg})` }
						: { backgroundImage: `url(${editInfo.image})` }
				}
			>
				<PostUploadImg
					uploadImgs={uploadImgs}
					setUploadImgs={setUploadImgs}
					isMulty={false}
				/>
			</ProfileImgWrap>
			<EditUsername
				editInfo={editInfo}
				setEditInfo={setEditInfo}
				errorInfo={errorInfo}
				setErrorInfo={setErrorInfo}
			/>
			<EditAccount
				editInfo={editInfo}
				setEditInfo={setEditInfo}
				errorInfo={errorInfo}
				setErrorInfo={setErrorInfo}
			/>
			<EditIntro editInfo={editInfo} setEditInfo={setEditInfo} />
			<BigBtn
				type="submit"
				disabled={
					errorInfo.username.state || errorInfo.accountname.state
				}
			>
				저장
			</BigBtn>
		</FormWrap>
	);
}
export default ProfileEdit;
