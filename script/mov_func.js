/*
  vérfarkas mozgásparaméterei a background-position-hoz:
  [0,-50, -97, -144]
*/


var bitMapPos = function(posX) {

  /*
  Ez állítja be, hogy a bitmap amin a
  karakter van, rendesen legyen animálva.
  */
  moveX++;
  //console.log(moveX + " " + val);


  if(moveX >= 3) {
    moveX = -1;
    moveX++;
  }
  //console.log("moveX " + moveX);
} // bitMapPos vége

var edgeListener = function() {
  //nézi, hogy a akarater meddig mehet a képernyőn
  let chrPos = Number($('.character').css('left').replace('px',''));

  if(chrPos <= 205 && chrPos >= -205) {
    return true;
  } else {
    return false;
  }
} // edgeListener() vége

var moveScreenElement = function(elem, movVal) {
  let elemPos = Number($(elem).css('background-positionX').replace('%',''));
  elemPos += movVal;
  console.log(elem + ' ' + elemPos);
  $(elem).css({'background-positionX': (elemPos) + '%'});
}

var movOnScreen = function(goLeft) {

  /*
  Ez mozgatja a karaktert a képernyőn
  */

  let chrPos = Number($('.character').css('left').replace('px',''));
  //console.log(chrPos);
  if(horizontal == true || jmpHor == true) {

    if(edgeListener()) {
      if(goLeft == false) {
        leftVal += 5;
      } else {
        leftVal -= 5;
      }
    } else {

      if(chrPos == 210) {
        leftVal -= 5;
      } else if (chrPos == -210) {
        leftVal += 5;
      }

      if(chrPos > 200) {
        moveScreenElement('.mountains', 0.2);
        moveScreenElement('.grass', 0.6);
        moveScreenElement('.trees', 0.9);
      } else if (chrPos < -200) {
        moveScreenElement('.mountains', -0.2);
        moveScreenElement('.grass', -0.6);
        moveScreenElement('.trees', -0.9);
      }

    }
  }

  return leftVal;
} // movOnScreen vége

var drawJmp = function() {
  //ugrás animálása
  //console.log('jmpHor ' + jmpHor);
  //console.log('horizontal ' + horizontal);
  if (chrJmp == true && onBottom == false) {

    chr.css({'background-positionX':-242});

    if(topVal != -50) {
      topVal -= 5;
    } else {
      chrJmp = false; //ez itt azért kell, hogy le is érjen a karakter
      onBottom = true; // ezt az esemény kezelőben állítom át, ha megnyomom a felt
    }
  } else {
    if (topVal != 0) {
      topVal += 5;
    } else if (topVal == 0) {
      chr.css({'background-positionX':posX[moveX]});
    }
  }

  if(jmpHor == true && edgeListener()) {
    chr.css({"left":movOnScreen(goLeft) + 'px'});
  }

  //console.log('topVal értéke ' + topVal);
  chr.css({'top':topVal + 'px'});


} // drawJmp vége

var drawChar = function() {

  let val = posX[moveX];

  if(horizontal == true) {
    if (goLeft == false) {
      chr.css({'transform':'scaleX(1)'});
      //chr.css({'background-positionY':dimY*(-1)});
    } else {
      chr.css({'transform':'scaleX(-1)'});
      //chr.css({'background-positionY':dimY*(-3)});
    }

    chr.css({'background-positionX':val});
    chr.css({"left":movOnScreen(goLeft) + 'px'});
  }

  // TODO: Itt majd az ugrásnál lesznek problámák
  // de majd ha odaértem kijavítom

  //horizontal = false;


} // drawChar vége
