const envConfig = require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});
const sgMail = require('@sendgrid/mail');
const { GATSBY_SENDGRID_API_KEY, GATSBY_EMAIL_RECIEVER } = process.env;

exports.handler = async (event) => {
	const payload = JSON.parse(event.body);
	const { fullName, email, message } = payload;

	sgMail.setApiKey(GATSBY_SENDGRID_API_KEY);

	const msg = {
		to: GATSBY_EMAIL_RECIEVER,
		from: email,
		subject: `AMS Elektronik: Nowa wiadomość od ${fullName}`,
		text: message,
	};

	try {
		await sgMail.send(msg);

		return {
			statusCode: 202,
			body: 'Message sent',
		};
	} catch (error) {
		const statusCode = typeof error.code === 'number' ? error.code : 500;

		return {
			statusCode,
			body: error.message,
		};
	}
};
