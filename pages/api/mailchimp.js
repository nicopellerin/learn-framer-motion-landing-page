export default async (req, res) => {
    const { email } = req.body

    if (!email) {
        return res.status(400).json({error: 'Email is required'})
    }

    try {
        const LIST_ID = process.env.MAILCHIMP_LIST_ID
        const API_KEY = process.env.MAILCHIMP_API_KEY
        const DATACENTER = API_KEY.split('-')[1]

        const data = {
            email_address: email,
            status: 'subscribed'
        }

        const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        if (response.status >= 400) {
            return res.status(400).json({ error: `There was an error subscribing to course updates. Send me an email at [nico@learnframermotion.com] and I'll add you.`})
        }

        return res.status(201).json({ error: '' })

    } catch (err) {
        return res.status(500).json({ error: err.message || err.toString() })
    }
}
