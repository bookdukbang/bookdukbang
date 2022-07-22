import React, { useState, useEffect } from 'react';
import {
	InputDiv,
	LabelStyle,
	InputStyle,
	ErrorText,
} from '../common/Input.style';
import FormWrap from '../common/FormWrap.style';
import { BigBtnDiv, BigBtn } from '../common/Button.style';
import { useNavigate } from 'react-router-dom';

function JoinForm() {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const [isDisabled, setIsDisabled] = useState(true);
	const [isWrong, setIsWrong] = useState(false);
	const [msg, setMsg] = useState('');
	const [msgEmail, setMsgEmail] = useState('');
	const [isEmail, setIsEmail] = useState(true);
	const [isPw, setIsPw] = useState(true);

	const url = 'https://mandarin.api.weniv.co.kr';

	const loginData = {
		user: {
			email: id,
			password: pw,
		},
	};

	const navigate = useNavigate();

	// id, pw가 둘 중 하나라도 비어있으면 버튼 비활성화 관리
	useEffect(() => {
		if (id && pw) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [id, pw]);

	// useEffect로 이메일 형식이 맞는지 관리
	useEffect(() => {
		if (isEmail) {
			setIsEmail(true);
		} else {
			setIsEmail(false);
		}
	}, [id, pw]);

	// id, pw 둘 다 비어있지 않을 때 버튼 활성화하는 함수
	function checkBtn() {
		if (id !== '' && pw !== '') {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}

	// 이메일 유효성 검사
	function emailValidation(target) {
		const emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		const emailCurrent = target;
		if (emailCurrent === '') {
			setMsgEmail('필수 입력사항을 입력해주세요.');
			setIsEmail(false);
		} else if (!emailRegex.test(emailCurrent)) {
			setMsgEmail('잘못된 이메일 형식입니다.');
			setIsEmail(false);
		} else {
			setMsgEmail('');
			setIsEmail(true);
		}
	}

	// 비밀번호 유효성 검사
	function pwValidation(target) {
		const pwCurrent = target;
		if (pwCurrent === '') {
			setMsg('필수 입력사항을 입력해주세요.');
			setIsPw(false);
		} else if (pwCurrent.length < 6) {
			setMsg('비밀번호는 6자 이상이어야 합니다.');
			setIsPw(false);
		} else {
			setMsg('');
			setIsPw(true);
		}
	}

	// API 통신
	const handleJoinSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(url + '/user/emailvalid', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(loginData),
			});
			const result = await response.json();

			// 통신할 때 유효성 검사
			if (result.message === '사용 가능한 이메일 입니다.') {
				if (!isEmail) {
					setMsgEmail('잘못된 이메일 형식입니다.');
				} else if (!isPw) {
					setMsg('비밀번호는 6자 이상이어야 합니다.');
				} else {
					setMsg(result.message);
					setIsDisabled(false);
					navigate('/join/profile', {
						state: {
							id: id,
							pw: pw,
						},
					});
				}
			} else if (
				result.message === '이미 가입된 이메일 주소 입니다.' ||
				!isEmail ||
				!isPw
			) {
				e.preventDefault();
				setIsDisabled(true);
				setIsEmail(false);
				setMsg(result.message);
			} else {
				setIsWrong(true);
				setIsDisabled(true);
				setMsg(result.message);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// id input
	const handleIdInput = (e) => {
		setId(e.target.value);
		checkBtn();
		emailValidation(e.target.value);
	};

	// pw input
	const handlePasswordInput = (e) => {
		setPw(e.target.value);
		checkBtn();
		pwValidation(e.target.value);
	};

	return (
		<>
			<FormWrap onSubmit={handleJoinSubmit}>
				<InputDiv>
					<LabelStyle htmlFor="id">아이디</LabelStyle>
					<InputStyle
						type="email"
						id="id"
						placeholder="이메일 주소를 입력해 주세요"
						onChange={handleIdInput}
						className={`${!isEmail || isWrong ? 'error' : ''}`}
						value={id}
						required
					/>
					<ErrorText>{msgEmail}</ErrorText>
				</InputDiv>
				<InputDiv>
					<LabelStyle htmlFor="password">비밀번호</LabelStyle>
					<InputStyle
						type="password"
						id="password"
						placeholder="비밀번호를 설정해 주세요."
						onChange={handlePasswordInput}
						className={`${!isPw || isWrong ? 'error' : ''}`}
						value={pw}
						required
					/>
				</InputDiv>
				<ErrorText>{msg}</ErrorText>
				<BigBtnDiv>
					<BigBtn
						disabled={isDisabled ? 'disabled' : ''}
						className={`${isDisabled ? 'disabled' : ''}`}
						type="submit"
					>
						다음
					</BigBtn>
				</BigBtnDiv>
			</FormWrap>
		</>
	);
}

export default JoinForm;
