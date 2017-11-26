var chr; // a karakter
var img;
var dimY; // bit térkép pozició
var dimX; // bit térkép pozició

var moveX = 0; // ez választja ki melyik pozició legyen aktív a tömbből
var leftVal = 0; // a karakter hol legyen a left értékhez képest
var topVal = 0; // az ugrás magassága
var posX = [-2, -26, -50]; // bit térkénep lévő poziciók
var goLeft = false;
var movListener = false;
var horizontal = false; //ez felügyeli, hogy folytonos fellel ne menjün oldalra
var chrJmp = false;
var jmpHor = false; // ha ugrás közben mozgunk oldalra
var onBottom = false; // ne maradjon a levegőben a karakter.
var jmpCount = 0;// ez most nem csinál semmit, nem tudom mért tettem ide
//var i = 0; //inkrementer a ciklusba, de most nincs értelme.

//teszt

var testWolf = new WereWolf('werewolf');
