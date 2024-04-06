const movableDiv = document.getElementById('movable-div');
const animateButton = document.getElementById('animate-button');

let isAnimating = false;

animateButton.addEventListener('click', function() {
  if (isAnimating) return; 

  isAnimating = true;

  movableDiv.classList.add('animate'); 

  movableDiv.addEventListener('animationend', function() { 
    movableDiv.classList.remove('animate'); 
    isAnimating = false;
  });
});
