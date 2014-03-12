var artists = []
var html_data = [];
var num = 0;
function get_artist_list (number) {
  console.log(number);
  $.get('http://www.mtv.com/artists/popular/?pageNum='+number, function(data) {
  })
  .done(function (data) {
    $.each ($(data).find('.title'), function(index, value) {
     artists.push($(value).text());
    });
    num++;
    if (number < 500)
      get_artist_list(num);
  });
}

get_artist_list(num);