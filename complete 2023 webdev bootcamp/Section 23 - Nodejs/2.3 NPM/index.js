// JSON stands for JavaScript Object Notation

/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */

// npm istall sillyname
import generateName from 'sillyname';
var sillyName = generateName();
console.log("My name is " + sillyName);

// npm install superheroes
import superheroes from 'superheroes';
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
const superHeroName = superheroes.random();
//=> 'Spider-Ham'
console.log("My super hero name is " + superHeroName + "!");