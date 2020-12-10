const nodemailer = require('nodemailer');
        const defaultMailingList = "titus@orgbubble.com";
        const senderEmail = "titusbuchananjr@gmail.com";
        const senderPassword = "Titus908!"; // gmail app password
        module.exports = {
            sendMail: async (subject, text, to = defaultMailingList) => {
                try {
                const transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                    user: senderEmail,
                    pass: senderPassword,
                    },
                });

                const message = {
                    from: `report sender <${senderEmail}>`,
                    to,
                    subject,
                    text: subject,
                    html: text,
                };

                transporter.sendMail(message, () => {});
                } catch (e) {
                // handle errors here
                }
            },
        };