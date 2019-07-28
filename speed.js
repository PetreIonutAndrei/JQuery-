$(document).ready(function() { // FUNCTIE ANONIMA
    $('#startbtn').click(start);
});
var score = 0;
function start(){
  $('#startbtn').hide();
  showScore();
  newLetter();

}

function showScore(){
  $('#score').text('SCORE: '+ score);
}

function newLetter() {
  var letter = randomLetter();
  var x = randomPosition(screen.width - 20);
  var y = randomPosition(screen.height - 20);
  div = $('<div></div>').text(letter)
                        .css('top', y + 'px')
                        .css('left', x + 'px')
                        .attr('class','letter ' + letter);
                          // II ADAUGAM O CLASA ,DAR FIECARE LITERA VA FI INTR-O CLASA COMUNA

                        //FACEM NOUL ELEMENT / div

    $('body').append(div);
    setTimeout(newLetter, 3000);
}

function randomLetter(){
  var code = Math.floor(Math.random() * 26 + 65)
  var letter = String.fromCharCode(code);
  return letter;
}
function randomPosition(max) {
  return Math.floor(Math.random() * max);
}
