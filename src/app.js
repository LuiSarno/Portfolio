const hamburgerButton = document.getElementById('hamburger')
console.log(hamburgerButton);
const navList = document.getElementById('nav-list')
console.log(navList);


function toggleButton() {
    console.log("Toggle button function called.");
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', () => {console.log('Event listener attached'); toggleButton(); });
