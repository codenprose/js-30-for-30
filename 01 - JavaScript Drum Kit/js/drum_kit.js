// Play sound on keypress
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // if audio element doesn't exist, exit the function
  audio.currentTime = 0; // rewind audio file to the beginning
  audio.play();
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

// Remove css transition styles when transition has ended
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not a transition
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // Creates a node list
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
})
