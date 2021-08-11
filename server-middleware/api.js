require('dotenv').config()

const app = require('express')()

const express = require('express')

app.use(express.json())

const nodemailer = require('nodemailer');

app.all('/send-email', async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    });


    const body = req.body;

    let text = `Hello ${body.to.name},\n\n`;
    text += "We would like to invite you to our wedding ceremony.Please find attached the invitation for more details.\n\n";
    text += "Looking forward to seeing you there!\n\n";
    text += "Best wishes,\n";
    text += `${body.names.bride} and ${body.names.groom}`;

    var mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: body.to.email,
        subject: `Wedding Invitation from ${body.names.bride} and ${body.names.groom}`,
        text,
        attachments: [
            {
                filename: `${body.names.bride}-and-${body.names.groom}-wedding-invite.jpg`,
                path: body.invite
            },
        ]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.json({ sent: true })
})

module.exports = app
