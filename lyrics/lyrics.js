$('#submit').click(search);

function search() {
  $.getJSON(            // cererea catre api (- api  e un server cu mai multe baze de date)
    'https://api.lyrics.ovh/v1/' + $('#artist').val()              // 1. '' - calea de unde se iau informatiile; 2. apoi se concateneaza cu valuarea (val) inputului
    + '/' + $("#title").val(), // value e o metoda a elementului Jquery

    function (data) {            //data e obiect JSON
      $('#lyrics').text(data.lyrics);  // 1. acum luam din data si punem in elementul  nostru; 2. text - o metoda a lui Jquery
    }
  ).fail(function() {         // 1. situatia in care nu se gasesc versurile
      $('#lyrics').text('NOT FOUND');
  });
}
