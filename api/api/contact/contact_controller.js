const sendMail = require('../mailer')

require('dotenv').config();

exports.sendMessage = async (req, res) => {
    let {name, email, message} = req.body;

    const mailOptions = {
        from: email,
        to: process.env.GMAIL,
        subject: `Rentit Customer Contact ${name}`,
        text: `${message} \n Sender's email: ${email}`
    }

    try {
        let info = await sendMail(mailOptions);
        return res.status(200).json({
            message: 'Mail sent successfully',
        })
    } catch (err) {
        console.log('Sending the email failed', err);
            return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}