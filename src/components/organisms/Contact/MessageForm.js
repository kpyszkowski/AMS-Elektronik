import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const StyledContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

const MessageForm = () => {
	const [isPosting, setIsPosting] = useState(false);
	const [postingError, setPostingError] = useState(false);
	const [postingSuccess, setPostingSuccess] = useState(false);

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
		</StyledContainer>
	);
};

export default MessageForm;
