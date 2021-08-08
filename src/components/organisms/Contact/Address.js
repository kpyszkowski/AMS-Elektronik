import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';

import Paragraph from '../../atoms/Paragraph';
import Map from './Map.js';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledInfoWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
`;

const Address = () => {
	return (
		<StyledContainer>
			<Map />
			<StyledInfoWrapper>
				<StyledBox>
					AMS elektronik s.c. Andrzej Sarbinowski, Bogdan
					Miecznikowski, NIP 927-165-88-5, 66-225 Szczaniec, ul.
					Lipowa 31
				</StyledBox>
			</StyledInfoWrapper>
		</StyledContainer>
	);
};

export default Address;
