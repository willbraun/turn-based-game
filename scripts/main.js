import { Hero, Enemy } from './classes.js';
import { enemies, foods } from './objects.js';
import { getRandom } from './helpers.js';


// generate random enemy
let enemy = new Enemy(getRandom(enemies));


// prompt user to select hero (randomly selected now for testing)

<<<<<<< HEAD
// let hero;
// let testHero = new Hero(getRandom(heros));
// console.log(testHero);
=======
let hero;
let testHero = new Hero({name: 'kid1', health: 100});

/// HANDLEBARS TEMPLATE

>>>>>>> e60c166 (need to add functions to buttons on game start)

const buttonOne = document.querySelector('.select-hero-one');
const buttonTwo = document.querySelector('.select-hero-two');
const buttonThree = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const gameScreen = document.querySelector('.game-screen');
const attackButton = document.querySelector('.attack-btn');
const eatButton = document.querySelector('.eat-btn');


/// generate hero function 
// let hero;
function generateHeroOne() {
    let heroOne = new Hero({name: 'will', health: 100, power: 1.2});
    return heroOne;
}

function loadHeroTemplate(hero) {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.game-screen').innerHTML = html;
}



buttonOne.addEventListener('click', () => {
    /// needs to initiate game screen and remove character choice screen after clicking button
    /// make classes for html elements to show and hide from screens
    /// need to position start screen over main game screen and reveal game screen when button is cicked
    startScreen.classList.add('off-screen'); 
    setTimeout(() => {
        generateHeroOne();
        loadHeroTemplate(generateHeroOne());
        // console.log(heroOne);
        /// this moves start screen out of the way
        gameScreen.classList.remove('hidden')
    }, 450);
<<<<<<< HEAD
});
=======


    
})}
);
>>>>>>> e60c166 (need to add functions to buttons on game start)


// player.generateFood to show food on screen
testHero.generateFood(); // must add into function that creates character

// click attack
const attack = testHero.attack.bind(testHero);
console.log(testHero);
attackButton.addEventListener('click', () => {
    attack(enemy);
    console.log(enemy);
});


// click consume
const eat = hero.eat.bind(testHero)
eatButton.addEventListener('click', () => {
    eat();
    console.log(testHero);
});

// enemy random move
enemy.generateFood();
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(() => {
    randomMove(testHero);
    }, 1000);


