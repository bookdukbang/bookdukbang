import styled from 'styled-components';

const Profilestyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ProfileName = styled.p`
	font-weight: 700;
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
	@media (max-width: 390px) {
		font-size: 1.6rem;
	}
`;

const ProfileEmail = styled.p`
	font-weight: 300;
	color: ${({ theme }) => theme.grayColor2};
`;

const BigProfileEmail = styled(ProfileEmail)`
	font-size: 1.6rem;
	@media (max-width: 390px) {
		font-size: 1.4rem;
	}
`;

const SmallProfileEmail = styled(ProfileEmail)`
	font-size: 1.4rem;
`;

export {
	Profilestyle,
	ProfileName,
	ProfileEmail,
	BigProfileEmail,
	SmallProfileEmail,
};
