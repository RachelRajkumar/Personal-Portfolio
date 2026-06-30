// ===== PARTICLES =====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1,
    color: ['#00d4ff', '#a855f7', '#ff6b9d'][Math.floor(Math.random() * 3)],
  };
}

for (let i = 0; i < 120; i++) particles.push(createParticle());

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  ctx.globalAlpha = 1;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-card, .skill-category, .project-card, .about-text, .about-stats, .contact-info, .contact-form').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 30px rgba(0,0,0,0.5)' : 'none';
  document.getElementById('scroll-top').classList.toggle('show', window.scrollY > 400);
});

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.getElementById('scroll-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.getElementById('year').textContent = new Date().getFullYear();

// ===== SKILL BARS =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

// ===== PROJECTS =====
const GITHUB_USER = 'RachelRajkumar';
let allProjects = [];

const langColors = {
  JavaScript: '#f7df1e',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Python: '#3572A5',
  TypeScript: '#2b7489',
};

const fallbackProjects = [
  {
    title: 'Scientific Calculator',
    description: 'A responsive calculator interface built with HTML, CSS, and JavaScript.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/RachelRajkumar',
    liveUrl: null,
    category: 'javascript',
  },
  {
    title: 'Registration Form',
    description: 'A clean frontend form layout with validation-friendly structure.',
    techStack: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/RachelRajkumar',
    liveUrl: null,
    category: 'frontend',
  },
  {
    title: 'Shopping Cart',
    description: 'A frontend shopping cart UI concept for product and cart interactions.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/RachelRajkumar',
    liveUrl: null,
    category: 'javascript',
  },
];

function isHiddenProject(repoName) {
  const name = repoName.toLowerCase().replace(/[\s_.-]/g, '');
  return name === 'portfolio' || name === 'personalportfolio';
}

async function loadProjects() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=20`);
    if (!res.ok) throw new Error('GitHub request failed');
    const repos = await res.json();
    allProjects = repos
      .filter(r => r.name !== 'ProblemSolving.java' && !isHiddenProject(r.name))
      .map(r => ({
        title: r.name.replace(/-/g, ' ').replace(/\.java$/, ''),
        description: r.description || 'A frontend project by Rachel Rajkumar.',
        techStack: r.language ? [r.language] : ['Code'],
        githubUrl: r.html_url,
        liveUrl: r.homepage || null,
        category: r.language === 'JavaScript' ? 'javascript' : 'frontend',
      }));
    renderProjects(allProjects.length ? allProjects : fallbackProjects);
  } catch {
    allProjects = fallbackProjects;
    renderProjects(allProjects);
  }
}

const projectIcons = {
  Dribbble: 'fab fa-dribbble',
  GradeSheet: 'fas fa-graduation-cap',
  RegistrationForm: 'fas fa-wpforms',
  ScientificCalculator: 'fas fa-calculator',
  ShoppingCart: 'fas fa-shopping-cart',
  TaskManager: 'fas fa-tasks',
  CurrencyConvertor: 'fas fa-exchange-alt',
};

function renderProjects(projects) {
  document.getElementById('projects-grid').innerHTML = projects.map(p => `
    <div class="project-card reveal" data-category="${p.category}">
      <div class="project-img">
        <i class="${projectIcons[p.title.replace(/ /g, '')] || 'fas fa-code'}"></i>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">
          ${p.techStack.map(t => `<span style="color:${langColors[t] || 'var(--primary)'}">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.githubUrl}" target="_blank" rel="noopener"><i class="fab fa-github"></i> View on GitHub</a>
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.project-card.reveal').forEach(el => revealObserver.observe(el));
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    renderProjects(filter === 'all' ? allProjects : allProjects.filter(p => p.category === filter));
  });
});

loadProjects();

// ===== CONTACT FORM =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const status = document.getElementById('form-status');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening mail...';
  status.className = '';
  status.textContent = '';

  const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:rachelprincy55@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    status.className = 'success';
    status.textContent = 'Your email app has been opened.';
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
  }, 800);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (link) link.style.color = scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight ? 'var(--primary)' : '';
  });
});
