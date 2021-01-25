const sgMail = require('@sendgrid/mail')


export default async (req, res) => {
    const { email, name, subject, message } = req.body

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const html = `
    <h2>${name}</h2>
    <h4>${email}</h4>
    <h4>${subject}</h4>
    <p>${message}</p>
  `

  const msg = {
    to: process.env.SEND_GRID_EMAIL,
    from: process.env.SEND_GRID_EMAIL,
    subject: `Contact form - LearnFramerMotion: ${subject}`,
    html: html,
  }

    try {
        await sgMail.send(msg)

        return res.status(200).json({ body: 'Email sent!'})
    } catch (err) {
        return res.status(err.code).json({body: err.message})
    }
} 