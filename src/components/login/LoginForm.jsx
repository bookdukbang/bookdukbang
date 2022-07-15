import React, { useState, useEffect } from 'react';
import {
	InputDiv,
	LabelStyle,
	InputStyle,
	ErrorText,
} from '../common/Input.style';
import FormWrap from '../common/FormWrap.style';
import { BigBtnDiv, BigBtn } from '../common/Button.style';

function LoginForm() {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const [isWrong, setIsWrong] = useState(false);
	const [msg, setMsg] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);
	const [isEmail, setIsEmail] = useState(true);

	const url = 'https://mandarin.api.weniv.co.kr';

	const loginData = {
		user: {
			email: id,
			password: pw,
		},
	};

	const localStorage = window.localStorage;

	// 이메일 유효성 검사
	function checkEmail(target) {
		const emailRegex =
			/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		const emailCurrent = target;
		if (!emailRegex.test(emailCurrent)) {
			setMsg('잘못된 이메일 형식입니다.');
			setIsEmail(false);
		} else {
			setMsg('');
			setIsEmail(true);
		}
	}

	// id, pw가 둘 중 하나라도 비어있으면 버튼 비활성화
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

	// 로그인 버튼 눌렀을 때
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			// 로그인 API 통신 (id, pw 서버에 보내기)
			const response = await fetch(url + '/user/login', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(loginData),
			});
			const result = await response.json();
			console.log(result);

			// 로그인 성공
			if (result.status !== 422) {
				localStorage.setItem('token', result.user.token);
				setIsWrong(false);
				setMsg('');
				console.log('로그인 완료!');
			} else {
				// 로그인 실패
				setMsg(result.message);
				setIsWrong(true);
			}
		} catch (error) {
			console.log(error);
		}
	};

	// id input
	const handleIdInput = (e) => {
		setId(e.target.value);
		checkEmail(e.target.value);
	};

	// pw input
	const handlePasswordInput = (e) => {
		setPw(e.target.value);
	};

	return (
		<>
			<FormWrap onSubmit={handleLoginSubmit}>
				<InputDiv>
					<LabelStyle htmlFor="id" className="hide">
						아이디
					</LabelStyle>
					<InputStyle
						type="email"
						id="id"
						placeholder="아이디를 입력하세요."
						onChange={handleIdInput}
						className={`${!isEmail || isWrong ? 'error' : ''}`}
						value={id}
						required
					/>
				</InputDiv>
				<InputDiv>
					<LabelStyle htmlFor="password" className="hide">
						비밀번호
					</LabelStyle>
					<InputStyle
						type="password"
						id="password"
						placeholder="비밀번호를 입력하세요."
						onChange={handlePasswordInput}
						className={`${isWrong ? 'error' : ''}`}
						value={pw}
						required
					/>
					<ErrorText>{msg}</ErrorText>
				</InputDiv>
				<BigBtnDiv>
					<BigBtn
						disabled={isDisabled}
						className={`${isDisabled ? 'disabled' : ''}`}
						type="submit"
					>
						로그인
					</BigBtn>
				</BigBtnDiv>
			</FormWrap>
		</>
	);
}

export default LoginForm;
