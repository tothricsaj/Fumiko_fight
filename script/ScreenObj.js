class ScreenObj {

  constructor(className) {
    this.className = className;
  } // constructor() vége

  animeObj(obj) {
    // Az objIterator egy globális változó, ami alapján a tömben lévő
    // background-positionX adatokat fogja bejárni

    if(obj.i <= obj.maxEdge) {
      obj.i++;
    } else {
      obj.i = 0;
    }

    $('.' + this.className).css({'background-positionX':obj.moveArr[obj.i]});
  } // animeObj() vége

  // TODO: nos most egy kicsit összezavarodtál
  /*
    és ezt a zavart az okozta, hogy a wereMeta-ban
    van a left érték, ami minden eggyes DOM-ba betett
    farkast ugyan oda fog kiplottolni. arra kell keresned
    egy megoldást, hogy minden egyes elemnek külön
    legyen egy left értéke. Hajrá...
  */

  moveObj(obj, idCode) {
    // ez mozgatja az objektumot a képernyőn

    // Ez itt ugyan elég gyors, de ha lejjebb veszem, akkor olyan mintha
    // állna, ha a karakter az ellenkező irányba megy.
    // Amúgy a leggyorsabb paralax háttérhez van igazítva.
    obj.left += 1;

    $('#' + idCode).css({'left':obj.left + '%'});
    this.hideObj(obj);
  } // moveObj() vége

  hideObj(obj) {
    if(obj.left >= 33 || obj.left <= -33) {
      $('.' + this.className).css({'opacity':0});
      this.removeFromDOM();
    } // if vége
  } // hideObj() vége

  putToDOM(afterElement, elemId) {
    let elem = '<div class="' + this.className +'"' + 'id="' + elemId + '"></div>';
    $(elem).insertAfter(afterElement);
  } //putToDOM() vége

  removeFromDOM() {
    $('.' + this.className).remove();
    //console.log('eltüntet');
  } // removeFromDOM() vége
} // ScreenObj vége
