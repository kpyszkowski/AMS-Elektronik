import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

const StyledContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	position: relative;
`;

const MessageConfirmation = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: whitesmoke;
	visibility: hidden;
	pointer-events: none;
	transition: all ease-in-out 0.5s;

	${({ isConfirmationVisible }) =>
		isConfirmationVisible &&
		css`
			visibility: visible;
			pointer-events: all;
		`}
`;

const StyledParagraph = styled(Paragraph)`
	margin: 18px 0;
`;

const MessageForm = () => {
	const [isPosting, setIsPosting] = useState(false);
	const [postingError, setPostingError] = useState(false);
	const [postingSuccess, setPostingSuccess] = useState(false);
	const [isConfirmationVisible, toggleConfirmation] = useState(false);

	const { register, handleSubmit } = useForm();

	const sendMessage = async (data) => {
		setIsPosting(true);

		console.log(JSON.stringify(data));

		try {
			const res = await fetch('/.netlify/functions/sendmessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				setPostingError(true);
			} else {
				setPostingSuccess(true);
			}
		} catch (e) {
			setPostingError(true);
		} finally {
			setIsPosting(false);
		}

		toggleConfirmation(true);
	};

	return (
		<StyledContainer
			onSubmit={handleSubmit(sendMessage)}
			autoComplete="off"
		>
			<Input
				register={register}
				label="Imię i nazwisko..."
				name="fullName"
				required
			/>
			<Input
				register={register}
				label="Adres email..."
				name="email"
				type="email"
				required
			/>
			<Input
				register={register}
				textarea
				label="Twoja wiadomość..."
				name="message"
				required
			/>
			<Button type="submit">Wyślij wiadomość</Button>
			<MessageConfirmation isConfirmationVisible={isConfirmationVisible}>
				<Heading secondary as="h3">
					{postingSuccess && 'Wiadomość wysłana'}
					{postingError && 'Wiadomość nie została wysłana'}
				</Heading>
				<StyledParagraph>
					{postingSuccess &&
						'Dziękujemy za wiadomość, skontaktujemy się z Tobą wkrótce.'}
					{postingError &&
						'Spróbuj ponownie lub skorzystaj z innej metody kontaktu.'}
				</StyledParagraph>
				{postingError && (
					<Button
						type="button"
						secondary
						onClick={() => toggleConfirmation(false)}
					>
						Spróbuj ponownie
					</Button>
				)}
			</MessageConfirmation>
		</StyledContainer>
	);
};

export default MessageForm;
