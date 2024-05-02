const movableDiv = document.getElementById('movable-div');
const animateButton = document.getElementById('animate-button');

animateButton.addEventListener('click', function() {
  if (movableDiv.classList.contains('animate')) {
    movableDiv.style.animationPlayState = 'paused';
    movableDiv.classList.remove('animate');
  } else {
    movableDiv.style.animationPlayState = 'running';
    movableDiv.classList.add('animate');
  }
});