// Show custom greeting with user's name
function showGreeting() {
    const name = document.getElementById('name').value;
    const greeting = document.getElementById('greeting');
    const mainWrapper = document.querySelector('.main-wrapper');
    const nameForm = document.querySelector('.name-form');
  
    if (name.trim()) {
      greeting.textContent = `🎆 Happy Diwali, ${name}! 🎆`;
      mainWrapper.style.display = 'flex';
      nameForm.style.display = 'none';
    } else {
      alert('Please enter your name!');
    }
  }
  
  // Play video on button click
  function playVideo() {
    const video1 = document.getElementById('background-video');
    const video2 = document.getElementById('myVideo');
    video1.play();
    video1.muted=false;
    video2.play();
    video2.muted=false;
  }
  
  // Sparkle effect on button click
  function sparkle() {
    const sparkleElement = document.createElement('div');
    sparkleElement.classList.add('sparkle');
    sparkleElement.innerText = '✨';
    document.body.appendChild(sparkleElement);
    sparkleElement.style.left = `${Math.random() * 100}vw`;
    sparkleElement.style.top = `${Math.random() * 100}vh`;
    setTimeout(() => sparkleElement.remove(), 1000);
  }
  