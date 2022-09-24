const express = require('express')
const router = express.Router()

router.post('/email', (req, res) => {
    const outputHTML = `
            <h2>Mail Details</h2>
            <ul>
            <li>Name : ${req.body.name} </li>
            <li>Email : ${req.body.email} </li>
            <li>Phone : ${req.body.phone} </li>
            </ul>
            <h3>Message : </h3>
            <p>${req.body.message}</p>`


    "use strict";
    const nodemailer = require("nodemailer");

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'kayaserkankaya0721@gmail.com', // generated ethereal user
                pass: 'rnxmvrbnjczewpmh', // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Node Proje Contact Form" <kayaserkankaya0721@gmail.com>', // sender address
            to: "kayaserkankaya0721@gmail.com", // list of receivers
            subject: "Node Contact Message", // Subject line
            text: "Hello world?", // plain text body
            html: outputHTML, // html body
        });

        


        req.session.sessionFlash = {
            type: 'alert alert-success',
            message: 'Mesajınız başarılı şekilde gönderildi.'
        }

        res.redirect('/contact')


    }

    main().catch(console.error);



})

module.exports = router