var selection = 0;
var url = "http://www.netflix.com/browse/genre/"

function setupCategory() {
  var genreUrl = url + selection;
  var win = window.open(genreUrl);
    win.focus();
}
