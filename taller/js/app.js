
var NavItem = React.createClass({
  handleClick: function(evt) {
    evt.preventDefault();
    this.props.onNavItemClick(this.props.name);
  },
  render: function() {
    var activeCssClass = this.props.active? 'active':'';
    return (
      <li className={activeCssClass}>
        <a onClick={this.handleClick} href="">{this.props.name}</a>
      </li>
    );
  }
})

var Navbar = React.createClass({
  buildItems: function(albums, currentAlbum, onNavItemClick) {
    var items = [];
    var active;
    albums.forEach(function(album, i) {
      active = (currentAlbum == album.name);
      items.push(<NavItem name={album.name} key={i}
                          onNavItemClick={onNavItemClick}
                          active={active} />);
    });
    return items;
  },
  render: function() {
    var items = this.buildItems(
      this.props.albums,
      this.props.currentAlbum,
      this.props.onNavItemClick);
    return (
      <div id="sidebar" className="window window-full">
        <div className="layout">
          <ul className="nav nav-pills nav-stacked">
            <NavItem name="Todos"
                     onNavItemClick={this.props.onNavItemClick}
                     active={this.props.currentAlbum == "Todos"} />
            <li className="divider" />
            {items}
          </ul>
        </div>
      </div>
    );
  }
});

var ListToggle = React.createClass({
  handleClick: function(event) {
    var type = $(event.target).data('type');
    this.props.onListToggleClick(type);
  },
  render: function() {
    var activeTile = this.props.listType == 'tile'? 'btn btn-primary':'btn btn-default';
    var activeList = this.props.listType == 'list'? 'btn btn-primary':'btn btn-default';
    return (
      <div className="list-toggle">
        <div className="btn-group">
          <button data-type="list"
                  className={activeList}
                  onClick={this.handleClick}>
            Lista
          </button>
          <button data-type="tile"
                  className={activeTile}
                  onClick={this.handleClick}>
            Miniaturas
          </button>
        </div>
      </div>
    );
  }
});

var Photo = React.createClass({
  render: function() {
    var path = 'img/' + this.props.photo.file;
    var viewStyle = this.props.displayAs == 'tile'? 'col-md-4':'col-md-12';
    var style = viewStyle + ' pic ' + this.props.displayAs;
    console.log(style);
    return (
      <div className={style}>
        <img src={path} className="img-thumbnail" />
      </div>
    );
  }
});

var PhotoList = React.createClass({
  buildPhotoList: function(photos, currentAlbum, listType) {
    var photoList = [];
    photos.forEach(function(photo, i) {
      if (photo.album == currentAlbum ||
          currentAlbum == 'Todos') {
        photoList.push(<Photo photo={photo} key={i} displayAs={listType} />)
      }
    });
    return photoList;
  },
  render: function() {
    var photos = this.buildPhotoList(
      this.props.photos,
      this.props.currentAlbum,
      this.props.listType);
    return (
      <div id="main-content" className="album window window-full">
        <div id="title-bar">
          <h1>{this.props.currentAlbum}</h1>
        </div>
        <ListToggle listType={this.props.listType}
                    onListToggleClick={this.props.onListToggleClick} />
        <div className="layout">
          <div className="row">
            {photos}
          </div>
        </div>
      </div>
    );
  }
});

var PhotoViewer = React.createClass({
  getInitialState: function() {
    return {
      listType: 'tile',
      currentAlbum: 'Todos' 
    };
  },
  handleNavClick: function(albumName) {
    this.setState({currentAlbum: albumName});
  },
  handleListToggleClick: function(listType) {
    this.setState({listType: listType});
  },
  render: function() {
    return (
      <div>
        <div id="content" className="window window-full">
          <Navbar albums={this.props.albums}
                  currentAlbum={this.state.currentAlbum}
                  onNavItemClick={this.handleNavClick} />
          <PhotoList photos={this.props.photos}
                     currentAlbum={this.state.currentAlbum}
                     listType={this.state.listType}
                     onListToggleClick={this.handleListToggleClick} />
        </div>
      </div>
    );
  }
});


var photos = [
  {file: "1.jpg", description: "Parque", created: "2012-09-04", album: "Londres"},
  {file: "2.jpg", description: "Casa", created: "2012-09-04", album: "Londres"},
  {file: "3.jpg", description: "Carro", created: "2012-09-04", album: "Londres"},
  {file: "4.jpg", description: "Perro", created: "2012-09-04", album: "Londres"},
  {file: "5.jpg", description: "Carro", created: "2012-09-04", album: "Guayaquil"},
  {file: "6.jpg", description: "Paseo", created: "2012-09-04", album: "Guayaquil"},
  {file: "7.jpg", description: "Abuela", created: "2012-09-04", album: "Guayaquil"},
  {file: "8.jpg", description: "Edificio", created: "2012-09-04", album: "Guayaquil"},
  {file: "9.jpg", description: "Viaje", created: "2012-09-04", album: "Nueva York"},
  {file: "10.jpg", description: "Viaje", created: "2012-09-04", album: "Nueva York"},
  {file: "11.jpg", description: "Viaje", created: "2012-09-04", album: "Nueva York"},
];

var albums = [
  {name: "Guayaquil", cover_photo: "5.jpg"},
  {name: "Londres", cover_photo: "1.jpg"},
  {name: "Nueva York", cover_photo: "9.jpg"},
  {name: "Vinces", cover_photo: "5.jpg"},
  {name: "Quito", cover_photo: "1.jpg"},
  {name: "Buenos Aires", cover_photo: "9.jpg"}
]

var s = {"margin": "80px auto", "textAlign":"center"}

ReactDOM.render(
  <PhotoViewer albums={albums} photos={photos} />,
  document.getElementById('app')
);











