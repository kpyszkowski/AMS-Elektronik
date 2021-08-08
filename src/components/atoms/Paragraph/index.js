import styled from 'styled-components';

const Paragraph = styled.p`
	font-size: ${({ secondary }) => (secondary ? '0.8rem' : '1rem')};
	line-height: ${({ secondary }) => (secondary ? '1.6rem' : '2.3rem')};
`;

export default Paragraph;
