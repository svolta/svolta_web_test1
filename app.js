document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('greetBtn');
    button.addEventListener('click', () => {
        alert('Hello from Svolta Web Test!');
        console.log('User interacted with greeting button');
    });
})