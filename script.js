// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
const body = document.getElementById('body');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('bg-gray-800');
  body.classList.toggle('text-gray-100');
  toggleButton.classList.toggle('bg-gray-700');
  toggleButton.classList.toggle('text-white');
});
