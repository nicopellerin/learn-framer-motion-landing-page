const sgMail = require('@sendgrid/mail')


export default async (req, res) => {
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

    try {
        await sgMail.send(msg)

        return res.status(200).json({ body: 'Email sent!'})
    } catch (err) {
        return res.status(err.code).json({body: err.message})
    }
} 