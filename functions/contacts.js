const nodemailer = require('nodemailer');

module.exports.handler = async function (event) {

    response = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '',
            pass: ''
        }
    });

    const mailOptions = {
        from: '',
        to: '',
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

    const info = await transporter.sendMail(mailOptions, function (error, info) {
        return info || error;
    });

    return {
        statusCode: 200,
        body: info,
    };
}