const sgMail = require('@sendgrid/mail')


export default (req, res) => {
    const { email, name, subject, message } = req.body

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
        to: process.env.SENDGRID_EMAIL,
        from: process.env.SENDGRID_EMAIL,
        subject,
        html: `<div>
            <h1>${name} - ${email}</h1>
            <h2>${subject}</h2>
            <p>${message}</p>
        </div>`
    }

    sgMail.send(msg).then(() => console.log('Email sent')).catch(err => console.error(err))
} 