const toggleButton = document.getElementById('toggle-dark-mode');
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon on toggle
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
