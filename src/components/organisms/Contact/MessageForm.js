import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const StyledContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

const MessageForm = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		axios
			.post(
				'http://localhost:5001/ams-elektronik/us-central1/handleFormMessage',
				data,
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<StyledContainer onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
