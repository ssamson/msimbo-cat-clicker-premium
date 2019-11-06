// select cat names
const chron = document.querySelector('#chron');
const git = document.querySelector('#git');
const meow = document.querySelector('#meow');
const purr = document.querySelector('#purr');
const sync = document.querySelector('#sync');

// Select display area
const display = document.querySelector('#display');

// init count cat clicks
let chronClick = 0;
let gitClick = 0;
let meowClick = 0;
let purrClick = 0;
let syncClick = 0;

// Add event listener to cat names
chron.addEventListener('click', () => {
    // reset display area
    display.innerHTML = '';
    // create name, image and clicks
    const name = document.createElement('h3');
    name.textContent = 'chron';

    const image = document.createElement('img');
    image.src = `./images/chron.jpg`;

    const clicks = document.createElement('p');
    clicks.textContent = `clicks: ${chronClick}`;

    // append into display
    display.appendChild(name);
    display.appendChild(image);
    display.appendChild(clicks);
});