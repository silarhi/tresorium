// API de contact — envoie la demande par e-mail via Resend (https://resend.com)
//
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   RESEND_API_KEY  obligatoire — clé API Resend
//   CONTACT_TO      destinataire (défaut : tresorium.jl@gmail.com)
//   CONTACT_FROM    expéditeur (défaut : onboarding@resend.dev — sans domaine vérifié,
//                   Resend ne délivre qu'à l'adresse du compte Resend)

const escapeHtml = (value = '') =>
    String(value).replace(
        /[&<>"']/g,
        (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    )

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).json({ error: 'Méthode non autorisée' })
    }

    const { name, company, email, phone, subject, message, website } = req.body || {}

    // Honeypot : un humain ne remplit jamais ce champ
    if (website) {
        return res.status(200).json({ ok: true })
    }

    if (!name || !email) {
        return res.status(400).json({ error: 'Le nom et l’e-mail sont requis' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Adresse e-mail invalide' })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
        return res.status(503).json({ error: 'Service e-mail non configuré' })
    }

    const to = process.env.CONTACT_TO || 'tresorium.jl@gmail.com'
    const from = process.env.CONTACT_FROM || 'TRESORIUM <onboarding@resend.dev>'

    const rows = [
        ['Nom', name],
        ['Société', company],
        ['E-mail', email],
        ['Téléphone', phone],
        ['Besoin', subject],
    ]
        .filter(([, value]) => value)
        .map(
            ([label, value]) =>
                `<tr><td style="padding:6px 16px 6px 0;color:#5c6b7e;white-space:nowrap">${label}</td><td style="padding:6px 0"><strong>${escapeHtml(value)}</strong></td></tr>`
        )
        .join('')

    const html = `
        <div style="font-family:-apple-system,Segoe UI,sans-serif;font-size:15px;color:#16243a;line-height:1.6">
            <h2 style="font-weight:600">Nouvelle demande depuis le site TRESORIUM</h2>
            <table style="border-collapse:collapse">${rows}</table>
            ${message ? `<p style="margin-top:16px;padding:12px 16px;background:#f7f3ec;border-left:3px solid #c5a052;white-space:pre-wrap">${escapeHtml(message)}</p>` : ''}
        </div>
    `

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from,
            to: [to],
            reply_to: email,
            subject: `[Site web] ${subject || 'Demande de contact'} — ${company || name}`,
            html,
        }),
    })

    if (!response.ok) {
        const detail = await response.text()
        console.error('Resend error:', response.status, detail)
        return res.status(502).json({ error: 'L’envoi de l’e-mail a échoué' })
    }

    return res.status(200).json({ ok: true })
}
