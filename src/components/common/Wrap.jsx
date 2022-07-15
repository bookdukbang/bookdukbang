import styled from 'styled-components';

const Wrap = styled.div`
	max-width: 140rem;
	padding: 0 2em;
	margin: 0 auto;
	@media ${({ theme }) => theme.size.mobile} {
		padding: 0 1em;
	}
`;

export default Wrap;
