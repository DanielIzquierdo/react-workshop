(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var NavItem = React.createClass({
  displayName: "NavItem",

  handleClick: function handleClick(event) {
    this.props.onItemClick(this.props.name);
    event.preventDefault();
  },
  render: function render() {
    var cls = this.props.active ? "active" : "";
    return React.createElement(
      "li",
      { className: cls },
      React.createElement(
        "a",
        { onClick: this.handleClick, href: "" },
        this.props.name
      )
    );
  }
});

var Navbar = React.createClass({
  displayName: "Navbar",

  buildItemList: function buildItemList(albums) {
    var items = [];
    var item;
    var selAlbum = this.props.selectedAlbum;
    var handleItemClick = this.props.onItemClick;
    albums.forEach(function (album, i) {
      items.push(React.createElement(NavItem, { name: album.name, active: selAlbum == album.name,
        key: i,
        onItemClick: handleItemClick }));
    });
    return items;
  },
  render: function render() {
    var items = this.buildItemList(this.props.albums);
    return React.createElement(
      "div",
      { id: "sidebar", className: "window window-full" },
      React.createElement(
        "div",
        { className: "layout" },
        React.createElement(
          "ul",
          { className: "nav nav-pills nav-stacked" },
          React.createElement(NavItem, { name: "Todos",
            active: this.props.selectedAlbum == 'Todos',
            onClick: this.props.onItemClick }),
          React.createElement("li", { className: "divider" }),
          items
        )
      )
    );
  }
});

var Photo = React.createClass({
  displayName: "Photo",

  render: function render() {
    var baseDir = "img/";
    var src = baseDir + this.props.photo.file;
    // Se muestra como recuadro miniatura o ancho completo
    var viewStyle = this.props.displayAs == 'tile' ? 'col-md-4' : 'col-md-12';
    var style = viewStyle + ' pic ' + this.props.displayAs;
    return React.createElement(
      "div",
      { className: style },
      React.createElement("img", { src: src,
        className: "img-thumbnail" })
    );
  }
});

var ListToggle = React.createClass({
  displayName: "ListToggle",

  handleClick: function handleClick(evt) {
    // console.log(evt.target.id);
    this.props.onListToggleClick(evt.target.id);
  },
  render: function render() {
    var styleListBtn = 'btn ' + (this.props.listType == 'list' ? 'btn-primary' : 'btn-default');
    var styleTileBtn = 'btn ' + (this.props.listType == 'tile' ? 'btn-primary' : 'btn-default');
    return React.createElement(
      "div",
      { className: "list-toggle" },
      React.createElement(
        "div",
        { className: "btn-group", role: "group", "aria-label": "..." },
        React.createElement(
          "button",
          { id: "list", onClick: this.handleClick, type: "button",
            className: styleListBtn },
          "Lista"
        ),
        React.createElement(
          "button",
          { id: "tile", onClick: this.handleClick, type: "button",
            className: styleTileBtn },
          "Miniaturas"
        )
      )
    );
  }
});

var PhotoList = React.createClass({
  displayName: "PhotoList",

  buildPhotoList: function buildPhotoList(photos, selectedAlbum, listType) {
    var photosViews = [];
    photos.forEach(function (photo, i) {
      if (selectedAlbum == "Todos" || photo.album == selectedAlbum) {
        photosViews.push(React.createElement(Photo, { photo: photo, displayAs: listType, key: i }));
      }
    });
    return photosViews;
  },
  render: function render() {
    var photos = this.buildPhotoList(this.props.photos, this.props.selectedAlbum, this.props.listType);
    return React.createElement(
      "div",
      { id: "main-content", className: "album window window-full" },
      React.createElement(
        "div",
        { id: "title-bar" },
        React.createElement(
          "h1",
          null,
          this.props.selectedAlbum
        )
      ),
      React.createElement(ListToggle, { onListToggleClick: this.props.onListToggleClick,
        listType: this.props.listType }),
      React.createElement(
        "div",
        { className: "layout" },
        React.createElement(
          "div",
          { className: "row" },
          photos
        )
      )
    );
  }
});

var PhotoViewer = React.createClass({
  displayName: "PhotoViewer",

  getInitialState: function getInitialState() {
    return {
      selectedAlbum: "Todos",
      listType: "tile"
    };
  },
  handleMenuClick: function handleMenuClick(albumName) {
    this.setState({ selectedAlbum: albumName });
  },
  handleListSwitch: function handleListSwitch(listType) {
    this.setState({ listType: listType });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { id: "content", className: "window window-full" },
        React.createElement(Navbar, { albums: this.props.albums,
          selectedAlbum: this.state.selectedAlbum,
          onItemClick: this.handleMenuClick }),
        React.createElement(PhotoList, { photos: this.props.photos,
          listType: this.state.listType,
          selectedAlbum: this.state.selectedAlbum,
          onListToggleClick: this.handleListSwitch })
      )
    );
  }
});

var photos = [{ file: "1.jpg", description: "Parque", created: "2012-09-04", album: "Londres" }, { file: "2.jpg", description: "Casa", created: "2012-09-04", album: "Londres" }, { file: "3.jpg", description: "Carro", created: "2012-09-04", album: "Londres" }, { file: "4.jpg", description: "Perro", created: "2012-09-04", album: "Londres" }, { file: "5.jpg", description: "Carro", created: "2012-09-04", album: "Guayaquil" }, { file: "6.jpg", description: "Paseo", created: "2012-09-04", album: "Guayaquil" }, { file: "7.jpg", description: "Abuela", created: "2012-09-04", album: "Guayaquil" }, { file: "8.jpg", description: "Edificio", created: "2012-09-04", album: "Guayaquil" }, { file: "9.jpg", description: "Viaje", created: "2012-09-04", album: "Nueva York" }, { file: "10.jpg", description: "Viaje", created: "2012-09-04", album: "Nueva York" }, { file: "11.jpg", description: "Viaje", created: "2012-09-04", album: "Nueva York" }];

var albums = [{ name: "Guayaquil", cover_photo: "5.jpg" }, { name: "Londres", cover_photo: "1.jpg" }, { name: "Nueva York", cover_photo: "9.jpg" }];

ReactDOM.render(React.createElement(PhotoViewer, { photos: photos, albums: albums }), document.getElementById('app'));

},{}]},{},[1]);
