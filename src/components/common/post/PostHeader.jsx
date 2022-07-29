import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyle } from '../Button.style';
import Wrap from '../Wrap';
import HeaderLogo from '../../../assets/HeaderLogo.png';
const HeaderStyle = styled.header`
	background-color: ${({ theme }) => theme.bgMainColor};
	padding: 2.7rem 0;

	& h1 {
		display: inline-block;
	}
`;

const LogoImg = styled.img`
	width: 21.5rem;
	@media ${({ theme }) => theme.size.tablet} {
		width: 16.6rem;
	}
	@media ${({ theme }) => theme.size.mobile} {
		width: 11.6rem;
	}
`;
const PostUploadBtn = styled(ButtonStyle)`
	width: 12rem;
	padding: 1.2rem 0;
	float: right;

	&:disabled {
		opacity: 0.6;
	}

	@media ${({ theme }) => theme.size.mobile} {
		width: 8rem;
		padding: 0.5rem 0;
		font-size: 1.4rem;
	}
`;

function PostHeader({ isDisable, btnTxt }) {
	return (
		<HeaderStyle>
			<Wrap>
				<h1>
					<Link to="/feed">
						<LogoImg src={HeaderLogo} alt="북덕방" />
					</Link>
				</h1>
				<PostUploadBtn
					type="submit"
					form="postForm"
					disabled={isDisable}
				>
					{btnTxt}
				</PostUploadBtn>
			</Wrap>
		</HeaderStyle>
	);
}

export default PostHeader;
