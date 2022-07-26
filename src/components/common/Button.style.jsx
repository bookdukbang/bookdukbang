import styled from 'styled-components';

const ButtonStyle = styled.button`
	color: ${({ theme }) => theme.whiteColor};
	background-color: ${({ theme }) => theme.mainColor};
	width: 100%;
	border-radius: 5px;
	border: none;
	display: block;
	box-sizing: border-box;
	font-weight: 700;
`;

// 1. '로그인', '프로필 정보', '회원가입', '프로필 수정', '상품 등록' 페이지에서 사용되는 버튼 사이즈.
const BigBtnDiv = styled.div`
	max-width: 55rem;
	margin: 3rem auto 0;
	@media (max-width: 390px) {
		max-width: 32rem;
	}
`;
const BigBtn = styled(ButtonStyle)`
	padding: 1.8rem 0;
	font-size: 2.4rem;
	margin-top: 3rem;
	font-weight: 700;
	/* '로그인', '프로필 정보', '회원가입', '프로필 수정', '상품 등록' 페이지의 input에 아무것도 입력되지 않으면 버튼이 흐려집니다. */
	&.disabled {
		opacity: 0.7;
	}
	&:disabled {
		opacity: 0.7;
	}
	@media (max-width: 390px) {
		padding: 1rem 0;
		font-size: 2rem;
	}
`;

// 2.  '피드-팔로워 없음', '피드-팔로워 있음' 페이지에 사용되는 버튼 사이즈
const MediumBtnDiv = styled.div`
	max-width: 31rem;
	margin: 3rem auto 0;
`;
const MediumBtn = styled(ButtonStyle)`
	padding: 1.8rem 0;
	font-size: 2.4rem;
	margin-top: 3rem;
	@media ${({ theme }) => theme.size.mobile} {
		font-size: 1.6rem;
		padding: 0.8rem 0;
	}
`;

// 3. '유저 프로필' 페이지에 사용되는 버튼 사이즈
const SmallBtnDiv = styled.div`
	max-width: 32rem;
	margin: 3rem auto 0;
`;
const SmallBtn = styled(ButtonStyle)`
	padding: 1.4rem 0;
	font-size: 1.6rem;
`;

// 4. '게시물 상세 + 댓글', '채팅' 페이지에 사용되는 버튼 사이즈인데, 댓글이나 채팅이 입력되었을때 버튼
const LittleBtnDiv = styled.div`
	max-width: 12rem;
	margin: 3rem auto 0;
`;
const LittleBtn = styled(ButtonStyle)`
	padding: 1.3rem 0;
	font-size: 1.6rem;
`;

// 4. '게시물 상세 + 댓글', '채팅' 페이지에 사용되는 버튼 사이즈인데, 댓글이나 채팅이 입력되지 않았을때 버튼
const NoInputLittleBtnDiv = styled.div`
	max-width: 12rem;
	margin: 3rem auto 0;
`;
const NoInputLittleBtn = styled(ButtonStyle)`
	background-color: ${({ theme }) => theme.whiteColor};
	color: ${({ theme }) => theme.mainColor};
	padding: 1.3rem 0;
	font-size: 1.6rem;
	border: 1px solid ${({ theme }) => theme.mainColor};
`;

// 이미지 업로드 버튼
const ImgUploadBtn = styled.button`
	width: 7.5rem;
	height: 7.5rem;
	border-radius: 50%;
	border: 0px;
	background-color: ${({ theme }) => theme.mainColor};
	@media ${({ theme }) => theme.size.mobile} {
		width: 4.5rem;
		height: 4.5rem;
	}
`;

export {
	BigBtnDiv,
	ButtonStyle,
	BigBtn,
	MediumBtnDiv,
	MediumBtn,
	SmallBtnDiv,
	SmallBtn,
	LittleBtnDiv,
	LittleBtn,
	NoInputLittleBtnDiv,
	NoInputLittleBtn,
	ImgUploadBtn,
};
