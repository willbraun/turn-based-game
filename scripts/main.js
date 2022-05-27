import { Hero, Enemy } from './classes.js';
import { enemies, foods } from './objects.js';
import { getRandom } from './helpers.js';


// generate random enemy
let enemy = new Enemy(getRandom(enemies));

// prompt user to select hero (randomly selected now for testing)

let hero;
let testHero = new Hero({name: 'kid1', health: 100});

/// HANDLEBARS TEMPLATE


const buttonOne = document.querySelector('.select-hero-one');
const buttonTwo = document.querySelector('.select-hero-two');
const buttonThree = document.querySelector('.select-hero-three');
const startScreen = document.querySelector('.opening-screen');
const gameScreen = document.querySelector('.game-screen');
const attackButton = document.querySelector('.attack-btn');
const eatButton = document.querySelector('.eat-btn');
const audio = document.getElementById('characterSelect');

/// generate hero function 
// let hero;
function generateHero(name, health, powerLevel) {
    hero = new Hero({name: name, health: health, powerLevel: powerLevel});
    console.log(hero);
    return hero;
}

function loadHeroTemplate(hero) {
    const heroSource = document.querySelector('#hero-template').innerHTML;
    const template = Handlebars.compile(heroSource);
    const html = template(hero);
    document.querySelector('.game-screen').innerHTML = html;
}



buttonOne.addEventListener('click', () => {
    audio.play();
    hero = new Hero('kid1', 100);
    enemy = new Enemy('bully1', 100);
    /// needs to initiate game screen and remove character choice screen after clicking button
    /// make classes for html elements to show and hide from screens
    /// need to position start screen over main game screen and reveal game screen when button is cicked
    startScreen.classList.add('off-screen'); 
    const attackButton = document.querySelector('.attack-btn');
        const eatButton = document.querySelector('.eat-btn');
    setTimeout(() => {
        hero = generateHeroOne();
        hero.generateFood();
        loadHeroTemplate(generateHeroOne());
        

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
        loadHeroTemplate(generateHero('will', 120, 1.2));
        /// this moves start screen out of the way
        gameScreen.classList.remove('hidden')
    }, 450);
});

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
});


// click consume
const eat = hero.eat.bind(testHero)
eatButton.addEventListener('click', () => {
    
    eat(testHero.currentFood);
    console.log(testHero);
});

// enemy random move
enemy.generateFood();
const randomMove = enemy.randomMove.bind(enemy);

setTimeout(() => {
    randomMove(hero);
    console.log(hero, enemy);
}, 8000);
