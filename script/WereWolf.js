class WereWolf extends ScreenObj {

  constructor(className) {
    super(className);
    this.left = -32.5;

  } // constructor() vége

  howMuchWolf() {
    let possible = Math.floor((Math.random() * 70) + 1);
    let elemId = this.randomID();
    //console.log(possible);
    if(possible >= 60) {
      this.putToDOM(chr, elemId);
      $('#' + elemId).css({'left':this.leftGenerate() + 'px'});
    } // if vége
  } // howMuchWolf() vége

  randomID(obj) {
    let idCode = '';

    for(let i=0; i<4; i++) {
      let charGenerete = Math.floor((Math.random() * 25) + 65);
      idCode += String.fromCharCode(charGenerete);
    } // for vége

    //console.log(idCode);
    return idCode;

  } // randomID() vége

  leftGenerate() {
    return Math.floor((Math.random() * 20) + 50);
  } // leftGenerate() vége

  flipBackGround() {

  } // flipBackGround() vége
} // WereWolf vége
