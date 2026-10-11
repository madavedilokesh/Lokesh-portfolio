const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('lokesh-portfolio-theme');
if (savedTheme === 'light') body.classList.add('light');
themeToggle.textContent = body.classList.contains('light') ? '☾' : '☼';
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const theme = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('lokesh-portfolio-theme', theme);
  themeToggle.textContent = theme === 'light' ? '☾' : '☼';
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const roles = ['Data Scientist', 'Data Analyst', 'Insight Explorer'];
const roleNode = document.getElementById('roleText');
let roleIndex = 0;
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleNode.animate([{opacity:1, transform:'translateY(0)'},{opacity:0,transform:'translateY(-5px)'},{opacity:1,transform:'translateY(0)'}], {duration:420});
  roleNode.textContent = roles[roleIndex];
}, 2800);

document.getElementById('year').textContent = new Date().getFullYear();
