$(document).ready(function() {

  $(document).on('click', '.postButton', function() {
    var newItem = $('#inputField').val();
    $.ajax({
      method: 'POST',
      url: '/',
      data: JSON.stringify({todo : newItem}),
      contentType: 'application/json',
      success: function(data){
        console.log('DATA IS', data);
      },
      error: function(error){
        console.error('THIS IS A FUCKING ERROR:', error);
      }
    });
  });

  $(document).on('click', '.getButton', function() {
    $.ajax({
      method: 'GET',
      url: '/items',
      contentType: 'application/json',
      success: function(data){
        $('ul').empty();
        data.forEach(function(item) {
          $('ul').append('<li>'+item.task+'</li>');
        });
        console.log('GET BUTTON DATA IS', data);

      },
      error: function(error){
        console.error('THIS IS A FUCKING ERROR:', error);
      }
    });
  });
});