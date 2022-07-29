import styled from 'styled-components';
import ImgDeleteIcon from '../../../assets/icon-imgDelete.png';
import ArrowBtnIcon from '../../../assets/icon-arrow.png';

const PostImgWrap = styled.div`
	position: relative;
	flex-basis: 75rem;
	overflow: hidden;
	min-height: 44rem;
	@media ${({ theme }) => theme.size.tablet} {
		flex-basis: 60vw;
		min-height: 55vmin;
	}
	@media ${({ theme }) => theme.size.mobile} {
		min-height: 22rem;
		flex-basis: 22rem;
	}
`;

const PostImgList = styled.ul`
	width: 100%;
	@media ${({ theme }) => theme.size.mobile} {
		height: 22rem;
	}
`;

const PostImgLi = styled.li`
	width: 100%;
	padding-top: 64.4%;
	border: 1px solid ${({ theme }) => theme.grayColor4};
	border-radius: 1rem;
	position: absolute;
	top: 0;
	overflow: hidden;
	box-sizing: border-box;

	&:nth-child(1) {
		transform: translateX(0) translateY(0);
	}
	&:nth-child(2) {
		transform: translateX(101%) translateY(0);
	}
	&:nth-child(3) {
		transform: translateX(202%) translateY(0);
	}

	& span {
		${({ theme }) => theme.a11yHidden()};
	}

	& img {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 50%;
		transform: translateY(50%);
	}

	@media ${({ theme }) => theme.size.mobile} {
		width: 100%;
	}
`;

const PostImgDeleteBtn = styled.button`
	width: 5rem;
	height: 5rem;
	background-color: transparent;
	border: none;
	background-image: url(${ImgDeleteIcon});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 5rem;
	position: absolute;
	right: 0;
	top: 0;

	& span {
		${({ theme }) => theme.a11yHidden()};
	}
	@media ${({ theme }) => theme.size.mobile} {
		width: 3rem;
		height: 3rem;
		background-size: 3rem;
	}
`;

const PostArrowBtnWrap = styled.div`
	padding: 0 2rem;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	transform: translateY(20vmin);

	&::after {
		clear: both;
		content: '';
		display: block;
	}

	& button + button {
		float: right;
	}

	@media ${({ theme }) => theme.size.tablet} {
		transform: translateY(26vmin);
	}
`;

const ArrowBtnStyle = styled.button`
	background-color: rgba(102, 102, 102, 0.5);
	width: 7rem;
	height: 7rem;
	border: none;
	border-radius: 50%;
	background-image: url(${ArrowBtnIcon});
	background-repeat: no-repeat;
	background-size: 2.8rem;
	background-position: center;

	& span {
		${({ theme }) => theme.a11yHidden()};
	}
	@media ${({ theme }) => theme.size.tablet} {
		width: 4rem;
		height: 4rem;
		background-size: 1.5rem;
	}
`;
const PrevBtn = styled(ArrowBtnStyle)`
	transform: rotate(-180deg);
	float: left;
`;
const NextBtn = styled(ArrowBtnStyle)`
	float: right;
`;

export {
	PostImgWrap,
	PostImgList,
	PostImgLi,
	PostImgDeleteBtn,
	PostArrowBtnWrap,
	PrevBtn,
	NextBtn,
};
