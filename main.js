const view = {
    ul: document.querySelector('ul'),
    display: document.querySelector('#display'),
    renderList: function (cats) {
        for (cat of cats) {
            const li = document.createElement('li');
            li.textContent = cat.name;
            li.classList.add('list-group-item');
            li.addEventListener(
                'click',
                (catCopy => {
                    return () => {
                        view.renderCat(catCopy);
                    };
                })(cat)
            );
            view.ul.appendChild(li);
        }

    },
    renderCat: function(cat) {
        // rest display area
        display.innerHTML = '';
        // Create name, image and clicks;
        const name = document.createElement('h3');
        name.textContent = cat.name;

        const image = document.createElement('img');
        image.src = cat.img;
        image.addEventListener('click', () => {
            cat.clicks++;
            clicks.textContent = `clicks: ${cat.clicks}`;
        });

        const clicks = document.createElement('p');
        clicks.textContent = `clicks: ${cat.clicks}`;

        // append into display
        display.appendChild(name);
        display.appendChild(image);
        display.appendChild(clicks);
    }
};

const model = {
    cats: [
        { name: 'Chron', img: './images/chron.jpg', clicks: 0 },
        { name: 'Git', img: './images/git.jpg', clicks: 0 },
        {name: 'Meow', img: './images/meow.jpg', clicks: 0 },
        {name: 'Purr', img: './images/purr.jpg', clicks: 0 },
        {name: 'Sync', img: './images/sync.jpg', clicks: 0 }
    ]
};

const octopus = {
    init: function() {
        view.renderList(model.cats);
    }
};

octopus.init();





// Create cats
// const chron = { name: 'Chron', img: './images/chron.jpg', clicks: 0 };
// const git = { name: 'Git', img: './images/git.jpg', clicks: 0 };
// const meow = {name: 'Meow', img: './images/meow.jpg', clicks: 0 };
// const purr = {name: 'Purr', img: './images/purr.jpg', clicks: 0 };
// const sync = {name: 'Sync', img: './images/sync.jpg', clicks: 0 };

// const cats = [chron, git, meow, purr, sync];

// Select cats list placeholder
// const ul = document.querySelector('ul');

// render cats into html
// for (cat of cats) {
//     const li = document.createElement('li');
//     li.textContent = cat.name;
//     li.classList.add('list-group-item');
//     li.addEventListener(
//         'click',
//         (catCopy => {
//             return () => {
//                 renderCat(catCopy);
//             };
//         })(cat)
//     );
//     ul.appendChild(li);
// }

// Select display area
// const display = document.querySelector('#display');

// function renderCat(cat) {
    // rest display area
    // display.innerHTML = '';
    // Create name, image and clicks;
    // const name = document.createElement('h3');
    // name.textContent = cat.name;

    // const image = document.createElement('img');
    // image.src = cat.img;
    // image.addEventListener('click', () => {
    //     cat.clicks++;
    //     clicks.textContent = `clicks: ${cat.clicks}`;
    // });

    // const clicks = document.createElement('p');
    // clicks.textContent = `clicks: ${cat.clicks}`;

    // append into display
//     display.appendChild(name);
//     display.appendChild(image);
//     display.appendChild(clicks);
// }


// select cat names
// const chron = document.querySelector('#chron');
// const git = document.querySelector('#git');
// const meow = document.querySelector('#meow');
// const purr = document.querySelector('#purr');
// const sync = document.querySelector('#sync');

// Select display area
// const display = document.querySelector('#display');

// init count cat clicks
// let chronClick = 0;
// let gitClick = 0;
// let meowClick = 0;
// let purrClick = 0;
// let syncClick = 0;

// Add event listener to cat names
// chron.addEventListener('click', () => {
    // reset display area
    // display.innerHTML = '';
    // create name, image and clicks
    // const name = document.createElement('h3');
    // name.textContent = 'chron';

    // const image = document.createElement('img');
    // image.src = `./images/chron.jpg`;
    // image.addEventListener('click', () => {
    //     chronClick++
    //     clicks.textContent = `clicks: ${chronClick}`
    // });

    // const clicks = document.createElement('p');
    // clicks.textContent = `clicks: ${chronClick}`;

    // append into display
    // display.appendChild(name);
    // display.appendChild(image);
    // display.appendChild(clicks);
    // });

    // Add event listener to cat names
// git.addEventListener('click', () => {
    // reset display area
    // display.innerHTML = '';
    // create name, image and clicks
    // const name = document.createElement('h3');
    // name.textContent = 'git';

    // const image = document.createElement('img');
    // image.src = `./images/git.jpg`;
    // image.addEventListener('click', () => {
    //     gitClick++
    //     clicks.textContent = `clicks: ${gitClick}`
    // });

    // const clicks = document.createElement('p');
    // clicks.textContent = `clicks: ${gitClick}`;

    // append into display
    // display.appendChild(name);
    // display.appendChild(image);
    // display.appendChild(clicks);
    // });

    // Add event listener to cat names
// meow.addEventListener('click', () => {
    // reset display area
    // display.innerHTML = '';
    // create name, image and clicks
    // const name = document.createElement('h3');
    // name.textContent = 'meow';

    // const image = document.createElement('img');
    // image.src = `./images/meow.jpg`;
    // image.addEventListener('click', () => {
    //     meowClick++
    //     clicks.textContent = `clicks: ${meowClick}`
    // });

    // const clicks = document.createElement('p');
    // clicks.textContent = `clicks: ${meowClick}`;

    // append into display
    // display.appendChild(name);
    // display.appendChild(image);
    // display.appendChild(clicks);
    // });

    // Add event listener to cat names
// purr.addEventListener('click', () => {
    // reset display area
    // display.innerHTML = '';
    // create name, image and clicks
    // const name = document.createElement('h3');
    // name.textContent = 'purr';

    // const image = document.createElement('img');
    // image.src = `./images/purr.jpg`;
    // image.addEventListener('click', () => {
    //     purrClick++
    //     clicks.textContent = `clicks: ${purrClick}`
    // });

    // const clicks = document.createElement('p');
    // clicks.textContent = `clicks: ${purrClick}`;

    // append into display
    // display.appendChild(name);
    // display.appendChild(image);
    // display.appendChild(clicks);
    // });

    // Add event listener to cat names
// sync.addEventListener('click', () => {
    // reset display area
    // display.innerHTML = '';
    // create name, image and clicks
    // const name = document.createElement('h3');
    // name.textContent = 'sync';

    // const image = document.createElement('img');
    // image.src = `./images/sync.jpg`;
    // image.addEventListener('click', () => {
    //     syncClick++
    //     clicks.textContent = `clicks: ${syncClick}`
    // });

    // const clicks = document.createElement('p');
    // clicks.textContent = `clicks: ${syncClick}`;

    // append into display
//     display.appendChild(name);
//     display.appendChild(image);
//     display.appendChild(clicks);
// });