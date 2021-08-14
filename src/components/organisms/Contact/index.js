import React from 'react';
import styled, { css } from 'styled-components';

import { Container } from '../../../assets/styles/GlobalStyles';

import addressIcon from '../../../assets/images/address-icon.svg';

import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

import MessageForm from './MessageForm.js';
import ContactData from './ContactData.js';
import Map from './Map.js';

const StyledContainer = styled(Container)`
	position: relative;
	background-color: whitesmoke;
`;

const StyledIntroWrapper = styled.div`
	text-align: center;
	width: 100%;
	margin: 0 auto 68px;

	@media screen and (min-width: 1200px) {
		width: 480px;
	}
`;

const StyledContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media screen and (min-width: 865px), (min-width: 1200px) {
		grid-template-columns: 0.8fr 1fr;
	}

	grid-gap: 60px;
`;

const StyledAddressWrapper = styled.address`
	font-style: normal;
`;

const StyledParagraph = styled(Paragraph)`
	margin-bottom: 18px;

	${({ address }) =>
		address &&
		css`
			background: url(${addressIcon}) top left/42px no-repeat;
			padding-left: 58px;
		`}
`;

const StyledArea = styled.div`
	display: flex;

	${({ contact }) =>
		contact &&
		css`
			display: inline-flex;
			justify-content: space-evenly;
			flex-direction: column;

			@media screen and (min-width: 865px), (min-width: 1200px) {
				grid-area: 1 / 1 / 2 / 3;
				flex-wrap: wrap;
				flex-direction: row;
			}
		`}

	${({ address }) =>
		address &&
		css`
			flex-direction: column;

			@media screen and (min-width: 865px), (min-width: 1200px) {
				grid-area: 2 / 1 / 3 / 2;
			}
		`}

        ${({ messageForm }) =>
		messageForm &&
		css`
			@media screen and (min-width: 865px), (min-width: 1200px) {
				grid-area: 2 / 2 / 3 / 3;
			}
		`}
`;

const contactSections = [
	{
		name: 'Biuro',
		contactItems: [
			{
				icon: 'phone',
				data: '68 382 00 40',
			},
			{
				icon: 'mail',
				data: 'biuro@ams-elektronik.pl',
			},
		],
	},
	{
		name: 'Tel. komórkowy',
		contactItems: [
			{
				icon: 'phone',
				data: '604 461 595',
			},
			{
				icon: 'phone',
				data: '602 288 473',
			},
		],
	},
	{
		name: 'Serwis',
		contactItems: [
			{
				icon: 'phone',
				data: '68 382 00 39',
			},
			{
				icon: 'mail',
				data: 'serwis@ams-elektronik.pl',
			},
		],
	},
];

const Contact = () => (
	<StyledContainer id="kontakt">
		<StyledIntroWrapper>
			<Heading secondary as="h2">
				Kontakt
			</Heading>
			<StyledParagraph>
				Jesteś zainteresowany współpracą? Masz jakieś pytania?
				Zapraszamy do kontaktu telefonicznego lub przez formularz
				poniżej.
			</StyledParagraph>
		</StyledIntroWrapper>
		<StyledContentWrapper>
			<StyledArea contact>
				{contactSections.map((section) => (
					<ContactData
						key={section.contactItems[0].data}
						data={section}
					/>
				))}
			</StyledArea>
			<StyledArea address>
				<Map />
				<StyledAddressWrapper>
					<Heading tertiary as="h3">
						AMS elektronik s.c.
					</Heading>
					<StyledParagraph>
						Andrzej Sarbinowski, Bogdan Miecznikowski <br />
						NIP 927-165-88-51
					</StyledParagraph>
					<StyledParagraph address>
						ul. Lipowa 31 <br />
						66-225 Szczaniec
					</StyledParagraph>
				</StyledAddressWrapper>
			</StyledArea>
			<StyledArea messageForm>
				<MessageForm />
			</StyledArea>
		</StyledContentWrapper>
	</StyledContainer>
);
export default Contact;
