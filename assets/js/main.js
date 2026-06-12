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

// Formulaire de contact : ouvre le client mail avec la demande pré-remplie
const form = document.getElementById('contact-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
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
    window.location.href = `mailto:tresorium.jl@gmail.com?subject=${subject}&body=${body}`

    if (!form.querySelector('.form-success')) {
        const note = document.createElement('p')
        note.className = 'form-success'
        note.textContent =
            'Votre client de messagerie va s’ouvrir avec votre demande pré-remplie. Vous pouvez aussi nous écrire directement à tresorium.jl@gmail.com.'
        form.append(note)
    }
})

// Année courante dans le footer
document.getElementById('year').textContent = String(new Date().getFullYear())
