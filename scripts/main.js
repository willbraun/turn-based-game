import { Hero, Enemy } from './classes.js';
import { heros, enemies } from './objects.js';
import { getRandom } from './helpers.js';


// generate random enemy
let enemy = new Enemy(getRandom(enemies));
console.log(enemy);


// prompt user to select hero (randomly selected now for testing)

let hero;
let testHero = new Hero(getRandom(heros));


// document.querySelector('.hero1button').addEventListener('click', () => {
//     const hero = new Hero('kid1', 100)
// });
const buttonOne = document.querySelector('.select-hero-one');
const buttonTwo = document.querySelector('.select-hero-two');
const buttonThree = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const attackButton = document.querySelector('.attack-btn');
const eatButton = document.querySelector('.eat-btn');
// let hero, enemy;

// function getRandomFoodItem() {
//     return food[Math.floor(Math.random() * 5)];
// }


buttonOne.addEventListener('click', () => {
    hero = new Hero('kid1', 100);
    enemy = new Enemy('bully1', 100);
    // needs to initiate game screen and remove character choice scrren after clicking button
    //make classes for html elements to show and hide from screens
    
})


// player.generateFood to show food on screen
testHero.generateFood();
console.log(testHero.currentFood);

// click attack
const attack = testHero.attack.bind(testHero);
attackButton.addEventListener('click', () => {
    attack(testEnemy);
    console.log(testEnemy);
});


// click consume
eatButton.addEventListener('click', eat(food));
