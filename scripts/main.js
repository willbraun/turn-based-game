import { Hero, Enemy } from './classes.js';
import { enemies, foods } from './objects.js';
import { getRandom } from './helpers.js';


// generate random enemy
let enemy = new Enemy(getRandom(enemies));


// prompt user to select hero (randomly selected now for testing)

let hero;
let testHero = new Hero('kid1', 100);


/// HANDLEBARS TEMPLATE


const buttonOne = document.querySelector('.select-hero-one');
const buttonTwo = document.querySelector('.select-hero-two');
const buttonThree = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const gameScreen = document.querySelector('.game-screen');
const attackButton = document.querySelector('.attack-btn');
const eatButton = document.querySelector('.eat-btn');


buttonOne.addEventListener('click', () => {
    hero = new Hero('kid1', 100);
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
     const html = template(hero);
     /// needs to initiate game screen and remove character choice screen after clicking button
     /// make classes for html elements to show and hide from screens
     startScreen.classList.add('off-screen'); /// this move start screen out of the way, 
     /// need to position start screen over main game screen and reveal game screen when button is cicked
     setTimeout(() => {
         gameScreen.classList.remove('hidden');
         document.querySelector('.game-screen').innerHTML = html;
    /// needs to initiate game screen and remove character choice screen after clicking button
    /// make classes for html elements to show and hide from screens
    startScreen.classList.add('off-screen'); /// this move start screen out of the way, 
    /// need to position start screen over main game screen and reveal game screen when button is cicked
    setTimeout(() => {
        gameScreen.classList.remove('hidden');
    }, 450);
}));


// player.generateFood to show food on screen
testHero.generateFood();

// click attack
console.log(enemy);
const attack = testHero.attack.bind(testHero);
attackButton.addEventListener('click', () => {
    attack(enemy);
    console.log(enemy);
});


// click consume
const eat = testHero.eat.bind(testHero)
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


