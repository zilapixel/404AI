/* =========================================================
   404AI — Human Movement | Interaction Layer
   ========================================================= */

// ---------- Mobile Nav Toggle ----------
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
  // Close on link click (mobile)
  navMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// ---------- Navbar scroll effect ----------
const navbar = document.querySelector('.navbar');
const onScroll = () => {
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.style.background = 'rgba(10, 10, 11, 0.85)';
    navbar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06)';
  } else {
    navbar.style.background = 'rgba(10, 10, 11, 0.6)';
    navbar.style.boxShadow = 'none';
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Smooth scroll for in-page anchors ----------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---------- External links: open in new tab ----------
document.querySelectorAll('a[data-external]').forEach((a) => {
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener noreferrer');
});

// ---------- Reveal on scroll (IntersectionObserver) ----------
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

// ---------- 3D mouse-tracking tilt for phase cards ----------
const tiltCards = document.querySelectorAll('.phase-card, .timeline-card');
tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotY = ((x - cx) / cx) * 8; // max 8 deg
    const rotX = -((y - cy) / cy) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(10px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ---------- Progress bars animate on view (tokenomics page) ----------
const bars = document.querySelectorAll('.progress-fill');
if ('IntersectionObserver' in window && bars.length) {
  const barIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = el.dataset.width || '0%';
          requestAnimationFrame(() => {
            el.style.width = target;
          });
          barIO.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((b) => barIO.observe(b));
}

// ---------- Airdrop countdown (optional decorative) ----------
const counter = document.querySelector('[data-countdown]');
if (counter) {
  const endTime = new Date(counter.dataset.countdown).getTime();
  const dEl = counter.querySelector('[data-d]');
  const hEl = counter.querySelector('[data-h]');
  const mEl = counter.querySelector('[data-m]');
  const sEl = counter.querySelector('[data-s]');
  const tick = () => {
    const diff = Math.max(0, endTime - Date.now());
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    if (dEl) dEl.textContent = String(d).padStart(2, '0');
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  };
  tick();
  setInterval(tick, 1000);
}

// ---------- Partners infinite rail: duplicate children once ----------
const track = document.querySelector('.partners-track');
if (track && !track.dataset.cloned) {
  const clones = Array.from(track.children).map((c) => c.cloneNode(true));
  clones.forEach((c) => track.appendChild(c));
  track.dataset.cloned = '1';
                        }
