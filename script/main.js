$(document).ready(function() {

  chr = $('.character');
  img = $('#fumiko');
  dimY = (img.height()) / 8;
  dimX = dimY - 5;


  //chr.width(dimX);
  chr.height(dimY);

  chr.css({'background-positionY':dimY*(-1)});

  document.addEventListener("keydown", function(event) {
    //console.log(event.which);

    let nav = event.which; // a gomb amit lenyom a user

    if(nav == 39) {
      // jobbra nyíl

      movListener = true;
      horizontal = true;
      goLeft = false;
      jmpHor = true;

      bitMapPos(posX);

      //drawChar();

/*****************************************************/
    } else if(nav === 37){
      //balra nyíl

      movListener = true;
      horizontal = true;
      goLeft = true;
      jmpHor = true;

      bitMapPos(posX);

      //drawChar();

/*****************************************************/
    } else if(nav === 38) {
      movListener = true;
      chrJmp = true;
/*
      if(jmpHor == true) {
        horizontal = true;
      }
*/
    }

  });
  testWolf.putToDOM(chr, testWolf.randomID());
  gameLoop();

}); // document.ready() vége
