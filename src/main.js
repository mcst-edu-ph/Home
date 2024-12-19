import './index.css';

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

function toggleMenu() {
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  } else {
    console.warn('Mobile menu element not found!');
  }
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
  const isDark = currentTheme === 'dark';

  htmlElement.classList.toggle('dark', isDark);
  themeIcon.textContent = isDark ? '🌓' : '🌗';
  localStorage.setItem('theme', currentTheme);
}

function toggleTheme() {
  const isDarkMode = htmlElement.classList.toggle('dark');
  const newTheme = isDarkMode ? 'dark' : 'light';

  localStorage.setItem('theme', newTheme);
  themeIcon.textContent = isDarkMode ? '🌓' : '🌗';
}

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMenu);
} else {
  console.warn('Menu toggle element not found!');
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
} else {
  console.warn('Theme toggle element not found!');
}

window.addEventListener('load', hideLoadingScreen);

initializeTheme();
