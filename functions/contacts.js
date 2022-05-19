const nodemailer = require('nodemailer');

module.exports.handler = function (event) {

    response = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '9228554009d35d',
            pass: '627014ab723019'
        }
    });

    const mailOptions = {
        from: 'david@davidbraud.io',
        to: 'dbraudbass@gmail.com',
        subject: response.subject,
        text: `
      Name: 
      ${response.name}

      Email: 
      ${response.email}

      Message: 
      ${response.message}
    `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return {
                statusCode: 200,
                body: error,
            };
        } else {
            console.log('Email sent: ' + info.response);
            return {
                statusCode: 200,
                body: info.response,
            };
        }
    });
}