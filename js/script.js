const menuButton = document.getElementById('menu-button');
const primaryLinks = document.getElementById('primary-links');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
  primaryLinks.classList.toggle('hidden', isExpanded);
});

primaryLinks.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    primaryLinks.classList.add('hidden');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
