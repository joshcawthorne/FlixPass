var selection = 0;
var n = 0;
var text;
var url = "http://www.netflix.com/browse/genre/"

function setupCategory() {
  var genreUrl = url + selection;
  var win = window.open(genreUrl);
    win.focus();
}

function testSearch() {
  $('.form-search').on('submit',function(e){return false;});
  $('.form-search .btn').on('click', function(e){
      var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
      $('div.cat-contain .bold').each(function(){
           var $this = $(this);
           if($this.text().toLowerCase().indexOf(query) === -1)
               $this.closest('div.cat-contain').fadeOut();
          else $this.closest('div.cat-contain').fadeIn();
      });
  });
}
function searchInputDetection() {
  window.addEventListener('input', function (e) {

    //TODO: Create method that runs the hiding of unrelated items instantly on userinput, as opposed to forcing a user to press enter on their search.

  })
}
