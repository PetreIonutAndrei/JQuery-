$(document).ready(start);

function start() {
  $('#hidebtn').click(function(){
    $('#hideme').text('Hiding...');
    $('#hideme').hide({
      duration:2000,
      easing:'linear'
    });
    //$('div').hide(2000)
    $('div').each(function(index, element) {
      $(element).css('padding-left',
        (index * 10) + 'px'
      );
    });
    elem = $('<div>I am appended</div>');
    $('body').append(elem);
  })
}
