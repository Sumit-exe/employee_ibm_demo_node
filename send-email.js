import { text } from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    service: 'Gmail',
    auth: {
        user: 'sumits2700@gmail.com',
        pass: 'vrmp ugmy msyx nrje'
    }

});

const sendEmail = (toInput, subjectInput, textInput) => {

    const mailOptions = {
        from: 'sumits2700@gmail.com',
        to: toInput,
        subject: subjectInput,
        text: textInput
    };
    return new Promise(async (resolve, reject) => {
        try {
            const success = await transporter.sendMail(mailOptions);
            console.log(success);
            resolve(success)
        } catch (error) {
            console.log(error);
            reject(error)
        }

    })

};

export { sendEmail };