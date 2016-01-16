window.App = {};
var AlbumView = window.views.Album;

window.App = {
  bootstrap: function() {
    var albums = AlbumModel.fetch();
    var albumView = AlbumView.create(albums);
    $("#main-content").html(albumView);
  }
}