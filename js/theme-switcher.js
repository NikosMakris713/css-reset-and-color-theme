const themeSwitcher = document.getElementById('theme-toggle');
const doc = document.firstElementChild;

const getColorPreference = () => {
  if (localStorage.getItem('color-scheme') != null) {
    return localStorage.getItem('color-scheme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};
getColorPreference();

const setColorPreference = () => {
  if (localStorage.getItem('color-scheme') !== null) {
    doc.setAttribute('color-scheme', getColorPreference());
    localStorage.setItem('color-scheme', getColorPreference());
    themeSwitcher.setAttribute('aria-label', getColorPreference());
  }
  doc.setAttribute('color-scheme', getColorPreference());
  themeSwitcher.setAttribute('aria-label', getColorPreference());
};
setColorPreference();

// now this script can find and listen for clicks on the control
themeSwitcher.addEventListener('click', () => {
  if (getColorPreference() === 'light') {
    doc.setAttribute('color-scheme', 'dark');
    themeSwitcher.setAttribute('aria-label', 'dark');
    localStorage.setItem('color-scheme', 'dark');
  } else if (getColorPreference() === 'dark') {
    doc.setAttribute('color-scheme', 'light');
    themeSwitcher.setAttribute('aria-label', 'light');
    localStorage.setItem('color-scheme', 'light');
  }
});

const changeSystemColorPreferece = () => {
  window.matchMedia('(prefers-color-scheme: dark)').onchange = () => {
    setColorPreference();
  };
};
changeSystemColorPreferece();
