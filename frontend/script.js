const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  themeToggle.textContent = nextTheme === 'dark' ? 'Light mode' : 'Dark mode';
});

searchInput.addEventListener('input', event => {
  const value = event.target.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.links-grid a, .action-card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? 'block' : 'none';
  });
});

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (!document.documentElement.getAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  themeToggle.textContent = prefersDark ? 'Light mode' : 'Dark mode';
}
