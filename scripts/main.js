import { Hero, Enemy } from './classes.js';
import { enemies, foods } from './objects.js';
import { getRandom } from './helpers.js';


// generate random enemy
let enemy = new Enemy(getRandom(enemies));
let hero;

// prompt user to select hero (randomly selected now for testing)

// let hero;
// let testHero = new Hero(getRandom(heros));
// console.log(testHero);

const buttonOne = document.querySelector('.select-hero-one');
const buttonTwo = document.querySelector('.select-hero-two');
const buttonThree = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const gameScreen = document.querySelector('.game-screen');



/// generate hero function 
// let hero;
function generateHeroOne() {
    let heroOne = new Hero({name: 'will', health: 100, powerLevel: 1.2});
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
        hero = generateHeroOne();
        hero.generateFood();
        loadHeroTemplate(generateHeroOne());
        const attackButton = document.querySelector('.attack-btn');
        const eatButton = document.querySelector('.eat-btn');

        const attack = hero.attack.bind(hero);
        console.log(hero);
        attackButton.addEventListener('click', () => {
            attack(enemy);
            console.log(enemy);
        });

        const eat = hero.eat.bind(hero)
        eatButton.addEventListener('click', () => {
            eat();
            console.log(hero);
        });

        // console.log(heroOne);
        /// this moves start screen out of the way
        gameScreen.classList.remove('hidden')
    }, 450);

});



// enemy random move
enemy.generateFood();
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(() => {
    randomMove(hero);
    console.log(hero, enemy);
    }, 8000);


