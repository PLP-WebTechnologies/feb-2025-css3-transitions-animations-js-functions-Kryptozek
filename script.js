// Save user preference to localStorage
document.getElementById('saveBtn').addEventListener('click', function () {
  const username = document.getElementById('username').value.trim();
  if (username) {
    localStorage.setItem('preferredName', username);
    updateUsername(username);
  }
});

// Load stored username on page load
window.onload = function () {
  const storedName = localStorage.getItem('preferredName');
  if (storedName) {
    updateUsername(storedName);
  }
};

// Update displayed username
function updateUsername(name) {
  document.getElementById('username-display').textContent = name;
}

// Trigger animation on box click
const box = document.getElementById('animateBox');
box.addEventListener('click', function () {
  box.classList.remove('bounce'); // Reset if already active
  void box.offsetWidth;           // Force reflow
  box.classList.add('bounce');    // Re-trigger animation
});
