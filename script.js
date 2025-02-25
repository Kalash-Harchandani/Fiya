
document.addEventListener('DOMContentLoaded', () => {
    const modeSwitch = document.getElementById('mode-switch');
    modeSwitch.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      modeSwitch.textContent =
        document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
  });


document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing-text");
    const textToType = "FIYA";
    let index = 0;
    let isDeleting = false;
    
    // Adjust these values for a smoother, more eye-pleasing effect
    const typingSpeed = 200;       // Slower typing speed
    const erasingSpeed = 150;      // Slower erasing speed
    const pauseAfterTyping = 2000; // Longer pause after typing is complete
    const pauseAfterErasing = 800; // Pause after erasing
    
    function typeEffect() {
      if (!isDeleting) {
        // Type out characters one by one
        typingElement.textContent = textToType.substring(0, index);
        if (index < textToType.length) {
          index++;
          setTimeout(typeEffect, typingSpeed);
        } else {
          // When done typing, wait a bit then start deleting
          isDeleting = true;
          setTimeout(typeEffect, pauseAfterTyping);
        }
      } else {
        // Delete characters one by one
        typingElement.textContent = textToType.substring(0, index);
        if (index > 0) {
          index--;
          setTimeout(typeEffect, erasingSpeed);
        } else {
          // When done erasing, wait then start typing again
          isDeleting = false;
          setTimeout(typeEffect, pauseAfterErasing);
        }
      }
    }
    
    typeEffect();
  });
  
