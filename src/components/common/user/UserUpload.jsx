import styled from 'styled-components';
import profile from '../../../assets/profile.png';
import { ImgUploadBtn } from '../Button.style';

// 제일 큰 사이즈 논프로필
const NoneProfileBig = styled.div`
	width: 25rem;
	height: 25rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.grayColor4};
	margin: 0 auto;
	position: relative;
	box-sizing: border-box;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url(${profile});
`;

// 제일 큰 사이즈 업로드 버튼
const ImgUploadBtnBig = styled(ImgUploadBtn)`
	position: absolute;
	left: 17.5rem;
	top: 17.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		left: 10.5rem;
		top: 10.5rem;
	}
`;

// 제일 큰 사이즈 업로드 버튼 안의 이미지
const ImgUploadBig = styled.img`
	width: 4.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 2.75rem;
	}
`;

// 중간 사이즈 논프로필
const NoneProfileMedium = styled(NoneProfileBig)`
	width: 18rem;
	height: 18rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 12rem;
		height: 12rem;
	}
`;

// 중간 사이즈 업로드 버튼
const ImgUploadBtnMedium = styled(ImgUploadBtn)`
	position: absolute;
	width: 4.5rem;
	height: 4.5rem;
	left: 13.5rem;
	top: 13.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 3rem;
		height: 3rem;
		left: 9rem;
		top: 9rem;
	}
`;

// 중간 사이즈 업로드 버튼 안의 이미지
const ImgUploadMedium = styled.img`
	width: 2.1rem;

	@media ${({ theme }) => theme.size.mobile} {
		width: 1.4rem;
		vertical-align: baseline;
	}
`;

// 제일 작은 사이즈 논프로필
const NoneProfileSmall = styled(NoneProfileBig)`
	width: 5.2rem;
	height: 5.2rem;
	margin: 0 2rem 0 0;
	@media ${({ theme }) => theme.size.mobile} {
		width: 4rem;
		height: 4rem;
	}
`;

// 쓰는 예시
{
	/* <NoneProfileBig>
	<ImgUploadBtnBig type="button">
		<ImgUploadBig src={imgUpload} alt="" />
	</ImgUploadBtnBig>
</NoneProfileBig>

<NoneProfileMedium>
	<ImgUploadBtnMedium>
		<ImgUploadMedium src={setting} />
	</ImgUploadBtnMedium> */
}

export {
	NoneProfileBig,
	ImgUploadBtnBig,
	ImgUploadBig,
	NoneProfileMedium,
	ImgUploadBtnMedium,
	ImgUploadMedium,
	NoneProfileSmall,
};
