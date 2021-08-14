import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '../../atoms/Heading';

import officeIcon from '../../../assets/images/office-icon.svg';
import serviceIcon from '../../../assets/images/service-icon.svg';
import phoneIcon from '../../../assets/images/phone-icon.svg';
import mailIcon from '../../../assets/images/mail-icon.svg';

const icons = {
	office: officeIcon,
	phone: phoneIcon,
	mail: mailIcon,
	service: serviceIcon,
};

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 18px;
	flex-basis: 50%;

	&:nth-child(2) {
		order: 2;
	}

	@media screen and (min-width: 865px), (min-width: 1200px) {
		flex-direction: column-reverse;
		margin-bottom: 0;
	}
`;

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: ${({ contentData }) => (contentData ? 'column' : 'row')};
	position: relative;

	${({ heading }) => heading && css``};
`;

const StyledHeading = styled(Heading)`
	background: whitesmoke;
	margin: 0 auto;
	padding: 0 20px;
	position: relative;
	z-index: 1;
	break-inside: auto;

	&::before {
		content: '';
		width: 100%;
		height: 100%;
		background-color: whitesmoke;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	&::after {
		content: '';
		width: calc(100% + 40px);
		height: 1px;
		background-color: crimson;
		top: 50%;
		position: absolute;
		left: -20px;
		z-index: -2;
	}
`;

const StyledItemContainer = styled.li`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: center;
	margin-bottom: 12px;
`;

const StyledItemData = styled.span`
	background-color: #dcdcdc;
	padding: 10px 20px;
	border-radius: 10px;
	margin-left: 10px;
`;

const StyledIcon = styled.span`
	display: block;
	background: url(${({ icon }) => icon}) center/100% no-repeat;
	width: 42px;
	height: 42px;
`;

const ContactData = ({ data }) => {
	return (
		<StyledContainer>
			<StyledWrapper heading>
				{/*<StyledIcon heading icon={icons[data.icon]} />*/}
				<StyledHeading tertiary as="h3">
					{data.name}
				</StyledHeading>
			</StyledWrapper>
			<StyledWrapper contentData as="ul">
				{data.contactItems.map((item) => (
					<StyledItemContainer key={item.data}>
						<StyledIcon item icon={icons[item.icon]} />
						<StyledItemData>{item.data}</StyledItemData>
					</StyledItemContainer>
				))}
			</StyledWrapper>
		</StyledContainer>
	);
};

export default ContactData;
