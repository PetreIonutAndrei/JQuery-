 $(document).ready(function() {
    updateBitcoin();
});

function updateBitcoin() {
  $.getJSON(
    'htpps://api.coindesk.com/v1/bpi/currentprice.json',
    function(data) {
      console.log(data.bpi.EUR.rate);
      $('#rate').html(data.bpi.EUR.rate);
    }
  ).fail(function(){
    console.log('fail');
  });
  setTimeout(updateBitcoin, 10000)
}
