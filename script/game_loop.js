var wereMeta = {
  i : 0,
  moveArr : [0,-50, -97, -144],
  maxEdge : 3,
  left:-32.5,
  idCode : ''
}

var gameLoop = function() {

  drawJmp(); //azért van kívül az if-en, hogy az animáció lefusson

  if(movListener == true) {
    drawChar();
  }

  if(topVal == 0) {
    // ne maradjon a levegőben a karakter
    onBottom = false;
    jmpHor = false; // ne menjen ha nem ugrik
  }

  movListener = false;
  //jmpHor = false;
  horizontal = false;

  //vérfarkas teszt
  testWolf.howMuchWolf();
  testWolf.animeObj(wereMeta);
  testWolf.moveObj(wereMeta);

  setTimeout(gameLoop, 50);
} // gameLoop vége
