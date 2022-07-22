import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BigBtn, BigBtnDiv } from '../common/Button.style';
import {
	ErrorText,
	InputDiv,
	InputStyle,
	LabelStyle,
} from '../common/Input.style';
import FormWrap from '../common/FormWrap.style';
import profile from '../../assets/profile.png';
import imgUpload from '../../assets/imgUpload.png';
import { ImgUpload, ImgUploadBtnStyle, NoneProfile } from './JoinProfile.style';

function JoinProfileForm() {
	const [username, setUsername] = useState('');
	const [accountname, setAccountname] = useState('');
	const [intro, setIntro] = useState('');

	const [isDisabled, setIsDisabled] = useState(true);

	const imgInput = useRef();
	const [imageSrc, setImageSrc] = useState('');
	const [imgname, setImgname] = useState('');

	const [msgUserName, setMsgUserName] = useState('');
	const [msgAccountName, setMsgAccountName] = useState('');
	const [isUserName, setIsUserName] = useState(true);
	const [isAccountName, setIsAccountName] = useState(true);

	const location = useLocation();

	const id = location.state.id;
	const pw = location.state.pw;

	const navigate = useNavigate();

	// username, accountname 둘 중 하나라도 비어있으면 버튼 비활성화 관리
	useEffect(() => {
		if (username && accountname) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [username, accountname]);

	const joinData = {
		user: {
			username: username,
			email: id,
			password: pw,
			accountname: accountname,
			intro: intro,
			image: imgname,
		},
	};
	const url = 'https://mandarin.api.weniv.co.kr/';
	// API 통신
	const handleJoinSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(url + 'user/accountnamevalid', {
				method: 'POST',
				body: JSON.stringify(joinData),
				headers: {
					'Content-type': 'application/json',
				},
			});
			const result = await response.json();
			if (result.message === '이미 가입된 계정ID 입니다.') {
				setMsgAccountName(result.message);
				setIsAccountName(false);
				setIsDisabled(true);
			} else if (result.message === '사용 가능한 계정ID 입니다.') {
				setIsAccountName(true);
			} else {
				setMsgAccountName(result.message);
				setIsAccountName(false);
			}
			const res = await fetch(url + 'user', {
				method: 'POST',
				body: JSON.stringify(joinData),
				headers: {
					'Content-type': 'application/json',
				},
			});
			const userResult = await res.json();
			if (userResult.message === '회원가입 성공') {
				navigate('/login');
			}
		} catch (error) {
			console.error(error);
		}
	};

	// 이미지파일 인코딩
	const encodeFileToBase64 = (fileBlob) => {
		const reader = new FileReader();
		reader.readAsDataURL(fileBlob);

		return new Promise((resolve) => {
			reader.onload = async () => {
				let formdata = new FormData();
				formdata.append('image', fileBlob);

				// 이미지 API 통신
				const imgres = await fetch(url + 'image/uploadfile', {
					method: 'POST',
					body: formdata,
				});

				const imgdata = await imgres.json();

				setImgname(url + imgdata.filename);
				setImageSrc(reader.result);
				resolve();
			};
		});
	};

	const handleUsernameInput = (e) => {
		setUsername(e.target.value);
		usernameValidation(e.target.value);
	};

	const handleAccountnameInput = (e) => {
		setAccountname(e.target.value);
		accountnameValidation(e.target.value);
	};
	const handleIntroInput = (e) => {
		setIntro(e.target.value);
	};

	// useRef로 input이랑 impgUploadBtn 연결
	const inputClick = () => {
		imgInput.current.click();
	};

	// 사용자 이름 유효성 검사
	function usernameValidation(target) {
		const usernameCurrent = target;
		if (usernameCurrent === '') {
			setMsgUserName('필수 입력사항을 입력해주세요.');
			setIsUserName(false);
		} else if (usernameCurrent.length < 2 || usernameCurrent.length > 10) {
			setMsgUserName('사용자 이름은 2~10자 이내여야 합니다.');
			setIsUserName(false);
		} else {
			setMsgUserName('');
			setIsUserName(true);
		}
	}

	// 사용자 계정 ID 유효성 검사
	function accountnameValidation(target) {
		// eslint-disable-next-line
		const accountnameRegex = /[^(\w\.)]/g;
		const accountCurrent = target;
		if (accountCurrent === '') {
			setMsgAccountName('필수 입력사항을 입력해주세요.');
			setIsAccountName(false);
		} else if (accountnameRegex.test(accountCurrent)) {
			setMsgAccountName(
				'계정 ID는 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
			);
			setIsAccountName(false);
		} else {
			setMsgAccountName('');
			setIsAccountName(true);
		}
	}

	return (
		<>
			<FormWrap method="POST" onSubmit={handleJoinSubmit}>
				<NoneProfile
					style={
						imageSrc
							? { backgroundImage: `url(${imageSrc})` }
							: { backgroundImage: `url(${profile})` }
					}
				>
					<label htmlFor="image"></label>
					<input
						ref={imgInput}
						type="file"
						id="image"
						accept="img/*"
						onChange={(e) => {
							encodeFileToBase64(e.target.files[0]);
						}}
						style={{ display: 'none' }}
					/>
					<ImgUploadBtnStyle type="button" onClick={inputClick}>
						<ImgUpload src={imgUpload} alt="" />
					</ImgUploadBtnStyle>
				</NoneProfile>
				<InputDiv>
					<LabelStyle htmlFor="username">사용자 이름</LabelStyle>
					<InputStyle
						type="text"
						id="username"
						placeholder="2~10자 이내여야 합니다."
						className={`${!isUserName ? 'error' : ''}`}
						onChange={handleUsernameInput}
						required
					/>
					<ErrorText>{msgUserName}</ErrorText>
				</InputDiv>
				<InputDiv>
					<LabelStyle htmlFor="accountname">계정 ID</LabelStyle>
					<InputStyle
						type="text"
						id="accountname"
						placeholder="영문, 숫자, 특수문자(.,_)만 사용합니다."
						onChange={handleAccountnameInput}
						className={`${!isAccountName ? 'error' : ''}`}
						required
					/>
					<ErrorText>{msgAccountName}</ErrorText>
				</InputDiv>
				<InputDiv>
					<LabelStyle htmlFor="intro">소개</LabelStyle>
					<InputStyle
						type="text"
						id="intro"
						placeholder="자신에 대해 소개해 주세요!"
						onChange={handleIntroInput}
					/>
				</InputDiv>
				<BigBtnDiv>
					<BigBtn
						type="submit"
						className={`${isDisabled ? 'disabled' : ''}`}
					>
						북덕방 시작하기
					</BigBtn>
				</BigBtnDiv>
			</FormWrap>
		</>
	);
}

export default JoinProfileForm;
