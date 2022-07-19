import styled from 'styled-components';
import IconImgUpload from '../../assets/imgUpload.png';

const ImgFileLabel = styled.label`
	display: block;
	float: right;
	border-radius: 50%;
	background-image: url(${IconImgUpload});
	background-size: 4.5rem;
	background-repeat: no-repeat;
	background-position: center;
	width: 7.5rem;
	height: 7.5rem;
	background-color: ${({ theme }) => theme.mainColor};
	& span {
		${({ theme }) => theme.a11yHidden()};
	}

	@media ${({ theme }) => theme.size.mobile} {
		width: 5rem;
		height: 5rem;
		background-size: 3rem;
	}
`;

const ImgFileInput = styled.input`
	${({ theme }) => theme.a11yHidden()};
`;

export { ImgFileLabel, ImgFileInput };
