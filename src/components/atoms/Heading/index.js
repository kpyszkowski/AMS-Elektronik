import styled, { css } from 'styled-components';

const Heading = styled.h1`
	font-size: 56px;
	line-height: 160%;

	${({ secondary }) =>
		secondary &&
		css`
			font-size: 36px;
			line-height: 220%;
		`}

	${({ tertiary }) =>
		tertiary &&
		css`
			font-size: 20px;
			line-height: 260%;
		`}

    @media screen and (max-width: 865px) {
		font-size: 36px;
		line-height: 180%;

		${({ secondary }) =>
			secondary &&
			css`
				font-size: 32px;
				line-height: 220%;
			`}

		${({ tertiary }) =>
			tertiary &&
			css`
				font-size: 18px;
				line-height: 260%;
			`}
	}
`;

export default Heading;
