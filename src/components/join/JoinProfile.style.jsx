import styled from 'styled-components';
import { ImgUploadBtn } from '../common/Button.style';
import MainTitle from '../common/MainTitle';

const MainText = styled(MainTitle)`
	background-color: red;
`;

const ProfileArticle = styled.article`
	margin-top: 9rem;
	margin-bottom: 5rem;
`;

const NoneProfile = styled.div`
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
	@media ${({ theme }) => theme.size.mobile} {
		width: 15rem;
		height: 15rem;
	}
`;

const ImgUpload = styled.img`
	width: 4.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		width: 2.75rem;
	}
`;

const ImgUploadBtnStyle = styled(ImgUploadBtn)`
	position: absolute;
	left: 17.5rem;
	top: 17.5rem;
	@media ${({ theme }) => theme.size.mobile} {
		left: 10.5rem;
		top: 10.5rem;
	}
`;

export { MainText, ProfileArticle, NoneProfile, ImgUpload, ImgUploadBtnStyle };
