// TRESORIUM — interactions

// Header : fond opaque après scroll
const header = document.getElementById('header')
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40)
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// Menu mobile
const navToggle = document.getElementById('nav-toggle')
const siteNav = document.getElementById('site-nav')

navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open')
    navToggle.setAttribute('aria-expanded', String(open))
    navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu')
})

siteNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        siteNav.classList.remove('open')
        navToggle.setAttribute('aria-expanded', 'false')
    }
})

// Animations d'apparition au scroll
const revealObserver = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                revealObserver.unobserve(entry.target)
            }
        }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)

for (const el of document.querySelectorAll('.reveal')) {
    revealObserver.observe(el)
}

// Formulaire de contact : envoi via l'API (/api/contact, Vercel + Resend),
// avec bascule sur le client mail si l'API est indisponible
const form = document.getElementById('contact-form')
const CONTACT_EMAIL = 'tresorium.jl@gmail.com'

const showFormNote = (text, isError = false) => {
    let note = form.querySelector('.form-success')
    if (!note) {
        note = document.createElement('p')
        note.className = 'form-success'
        form.append(note)
    }
    note.classList.toggle('form-error', isError)
    note.textContent = text
}

const openMailClient = (data) => {
    const subject = encodeURIComponent(`[Site web] ${data.get('subject')} — ${data.get('company') || data.get('name')}`)
    const body = encodeURIComponent(
        [
            `Nom : ${data.get('name')}`,
            `Société : ${data.get('company') || '—'}`,
            `E-mail : ${data.get('email')}`,
            `Téléphone : ${data.get('phone') || '—'}`,
            '',
            data.get('message') || '',
        ].join('\n')
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    showFormNote(
        `Votre client de messagerie va s’ouvrir avec votre demande pré-remplie. Vous pouvez aussi nous écrire directement à ${CONTACT_EMAIL}.`
    )
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const submitBtn = form.querySelector('button[type="submit"]')
    submitBtn.disabled = true
    submitBtn.textContent = 'Envoi en cours…'

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(data.entries())),
        })

        if (response.ok) {
            form.reset()
            showFormNote('Merci ! Votre demande a bien été envoyée. Nous revenons vers vous très rapidement.')
        } else if (response.status === 400) {
            const { error } = await response.json()
            showFormNote(error || 'Veuillez vérifier les champs du formulaire.', true)
        } else {
            // API indisponible ou non configurée : on bascule sur le client mail
            openMailClient(data)
        }
    } catch {
        openMailClient(data)
    } finally {
        submitBtn.disabled = false
        submitBtn.textContent = 'Envoyer ma demande'
    }
})

// Année courante dans le footer
document.getElementById('year').textContent = String(new Date().getFullYear())
