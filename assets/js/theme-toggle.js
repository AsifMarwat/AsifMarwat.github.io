const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function setThemeIcon() {
  toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Load saved theme or default to dark
let savedTheme = localStorage.getItem('theme');

if (!savedTheme) {
  // First visit — set dark mode as default
  savedTheme = 'dark';
  localStorage.setItem('theme', 'dark');
}

if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

setThemeIcon();

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  setThemeIcon();
});
