import { Game, Hero, Enemy } from './classes.js';

let testHero = new Hero('mario', 100);
let testEnemy = new Enemy('bowser', 100);

console.log(testHero);
console.log(testEnemy);
// prompt user to select hero
document.querySelector('.hero1button').addEventListener('click', () => {
    const hero = new Hero('kid1', 100)
});



// autogenerate enemy randomly
// const game = new Game(hero object, enemy object)

// player.generateFood to show food on screen

// click throw

// click consume


