const client = require('@sendgrid/mail');

function sendEmail(client, data) {
	return new Promise((fulfill, reject) => {
		const data = {
			from: {
				email: data.email,
				name: data.fullName,
			},
			subject: `AMS Elektronik: Nowa wiadomość od ${data.fullName}`,
			to: 'kamilpyszkowski@gmail.com',
			html: data.message,
		};

		client
			.send(data)
			.then(([response, body]) => {
				fulfill(response);
			})
			.catch((error) => reject(error));
	});
}

exports.handler = function (event, context, callback) {
	const { GATSBY_SENDGRID_API_KEY } = process.env;

	const body = JSON.parse(event.body);
	const message = body.message;

	client.setApiKey(GATSBY_SENDGRID_API_KEY);

	sendEmail(client, message)
		.then((response) => callback(null, { statusCode: response.statusCode }))
		.catch((err) => callback(err, null));
};
