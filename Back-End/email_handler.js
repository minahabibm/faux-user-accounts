const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const { Email_HOST, Email_PORT, Email_USER, Email_PASS, Email_RECI } = process.env;

const transport = nodemailer.createTransport({
    host: Email_HOST,
    port: Email_PORT,
    auth: {
        user: Email_USER,
        pass: Email_PASS
    }
});

exports.sendEmail = (name, email, feedback) => {
    return new Promise(function(resolve, reject){
        const message = {
            from: Email_PASS, // Sender address
            to: Email_RECI,         // List of recipients
            subject: `new feedback from ${name}`, // Subject line
            text: `Name: ${name} \n E-mail: ${email} \n  Feedback: ${feedback} ` // Plain text body
        };

        transport.sendMail(message, function(err, info) {
            if (err) {
                reject(err);
                console.log(err);
            } else {
                resolve(info);
                console.log("E-mail sent!");
            }
        });
    });
}