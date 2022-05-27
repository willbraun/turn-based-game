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

const selectWill = document.querySelector('.select-hero-one');
const selectMatt = document.querySelector('.select-hero-two');
const selectLevi = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const gameScreen = document.querySelector('.game-screen');



/// generate hero function 
// let hero;
<<<<<<< HEAD
function generateHeroOne() {
    let heroOne = new Hero({name: 'will', health: 100, powerLevel: 1.2});
    return heroOne;
=======
function generateHero(name, health, powerLevel) {
    hero = new Hero({name: name, health: health, powerLevel: powerLevel});
    console.log(hero);
    return hero;
>>>>>>> 7c50d56 (refactors select button listeners with unique hero choices)
}

function loadHeroTemplate(hero) {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.game-screen').innerHTML = html;
}



selectWill.addEventListener('click', () => {
    /// needs to initiate game screen and remove character choice screen after clicking button
    /// make classes for html elements to show and hide from screens
    /// need to position start screen over main game screen and reveal game screen when button is cicked
    startScreen.classList.add('off-screen'); 
    setTimeout(() => {
<<<<<<< HEAD
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
=======
        loadHeroTemplate(generateHero('will', 120, 1.2));
>>>>>>> 7c50d56 (refactors select button listeners with unique hero choices)
        /// this moves start screen out of the way
        gameScreen.classList.remove('hidden')
    }, 450);

<<<<<<< HEAD
=======

selectMatt.addEventListener('click', () => {
    startScreen.classList.add('off-screen'); 
    setTimeout(() => {
        loadHeroTemplate(generateHero('matthew', 90, 1.8));

        gameScreen.classList.remove('hidden')
    }, 450);
});


selectLevi.addEventListener('click', () => {
    startScreen.classList.add('off-screen'); 
    setTimeout(() => {
        loadHeroTemplate(generateHero('levi', 180, 0.9));

        gameScreen.classList.remove('hidden')
    }, 450);
});


// player.generateFood to show food on screen
testHero.generateFood(); // must add into function that creates character

// click attack
const attack = testHero.attack.bind(testHero);
console.log(testHero);
attackButton.addEventListener('click', () => {
    attack(enemy);
    console.log(enemy);
>>>>>>> 7c50d56 (refactors select button listeners with unique hero choices)
});



// enemy random move
enemy.generateFood();
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(() => {
    randomMove(hero);
    console.log(hero, enemy);
    }, 8000);


