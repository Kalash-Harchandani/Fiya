
document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.getElementById('mode-switch');
    modeSwitch.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      modeSwitch.textContent =
        document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
  });
