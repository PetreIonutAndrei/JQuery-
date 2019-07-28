$(document).ready(function() {
   newFact();
   $('#newFact').click(newFact);
   $('#explode').click(explodeFact);
});
function explodeFact() {
  $('#fact').effect('explode');
}
function newFact() {
 $.getJSON(
   'https://api.icndb.com/jokes/random',
   function(data) {

     $('#fact').html(data.value.joke);
     $('#fact').effect('slide');
     console.log(data.value.joke);
   }).fail(function() {
   console.log('fail');
 });
}
