const envConfig = require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});
const sgMail = require('@sendgrid/mail');
const { GATSBY_SENDGRID_API_KEY, GATSBY_EMAIL } = process.env;

exports.handler = async (event) => {
	const payload = JSON.parse(event.body);
	const { fullName, email, message } = payload;

	sgMail.setApiKey(GATSBY_SENDGRID_API_KEY);

	const msg = {
		to: GATSBY_EMAIL,
		from: GATSBY_EMAIL,
		replyTo: email,
		subject: `AMS Elektronik: Nowa wiadomość od ${fullName} (${email})`,
		text: `
		${fullName} wysyła wiadomość:

		${message}
		
		${email}`,
	};

	console.log(msg);

	try {
		await sgMail.send(msg);

		return {
			statusCode: 202,
			body: 'Message sent',
		};
	} catch (error) {
		const statusCode = typeof error.code === 'number' ? error.code : 500;

		console.log(error.response.body.errors);

		return {
			statusCode,
			body: error.message,
		};
	}
};
