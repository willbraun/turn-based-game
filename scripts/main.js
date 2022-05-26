import { Game, Hero, Enemy } from './classes.js';

let testHero = new Hero('mario', 100);
let testEnemy = new Enemy('bowser', 100);


// prompt user to select hero



console.log(testHero);
console.log(testEnemy);



let hero, enemy;
document.querySelector('.hero1button').addEventListener('click', () => {
    const hero = new Hero('kid1', 100)
});
const buttonOne = document.querySelector('.select-hero-one');
const buttonTwo = doucment.querySelector('.select-hero-two');
const buttonThree = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');

buttonOne.addEventListener('click', () => {
    hero = new Hero('kid1', 100);
    enemy = new Enemy('bully1', 100);
})


// autogenerate enemy randomly
// const game = new Game(hero object, enemy object)

// player.generateFood to show food on screen

// click throw

// click consume


