
var NavItem = React.createClass({
  handleClick: function(event) {
    this.props.onItemClick(this.props.name);
    event.preventDefault();
  },
  render: function() {
    var cls = this.props.active? "active":"";
    return (
      <li className={cls}>
        <a onClick={this.handleClick} href="">{this.props.name}</a>
      </li>
    );
  }
});

var Navbar = React.createClass({
  buildItemList: function(albums) {
    var items = [];
    var item;
    var selAlbum = this.props.selectedAlbum;
    var handleItemClick = this.props.onItemClick;
    albums.forEach(function(album, i) {
      items.push(
        <NavItem name={album.name} active={(selAlbum == album.name)}
                 key={i}
                 onItemClick={handleItemClick} />
      );
    });
    return items;
  },
  render: function() {
    var items = this.buildItemList(this.props.albums);
    return (
      <div id="sidebar" className="window window-full">
        <div className="layout">
          <ul className="nav nav-pills nav-stacked">
            <NavItem name="Todos"
                     active={(this.props.selectedAlbum == 'Todos')}
                     onClick={this.props.onItemClick} />
            <li className="divider"></li>
            {items}
          </ul>
        </div>
      </div>
    );
  }
});

var Photo = React.createClass({
  render: function() {
    var baseDir = "img/";
    var src = baseDir + this.props.photo.file;
    // Se muestra como recuadro miniatura o ancho completo
    var viewStyle = this.props.displayAs == 'tile'? 'col-md-4':'col-md-12';
    var style = viewStyle + ' pic ' + this.props.displayAs;
    return (
      <div className={style}>
        <img src={src}
             className="img-thumbnail"/>
      </div>
    )
  }
})

var ListToggle = React.createClass({
  handleClick: function(evt) {
    // console.log(evt.target.id);
    this.props.onListToggleClick(evt.target.id);
  },
  render: function() {
    var styleListBtn = 'btn ' + (this.props.listType == 'list'? 'btn-primary':'btn-default')
    var styleTileBtn = 'btn ' + (this.props.listType == 'tile'? 'btn-primary':'btn-default')
    return (
      <div className="list-toggle">
        <div className="btn-group" role="group" aria-label="">
          <button id="list" onClick={this.handleClick} type="button"
                  className={styleListBtn}>Lista</button>
          <button id="tile" onClick={this.handleClick} type="button"
                  className={styleTileBtn}>Miniaturas</button>
        </div>
      </div>
    )
  }
});

var PhotoList = React.createClass({
  buildPhotoList: function(photos, selectedAlbum, listType) {
    var photosViews = [];
    photos.forEach(function(photo, i) {
      if (selectedAlbum == "Todos" ||
          photo.album == selectedAlbum) {
        photosViews.push(<Photo photo={photo} displayAs={listType} key={i} />)
      }
    });
    return photosViews;
  },
  render: function() {
    var photos = this.buildPhotoList(
      this.props.photos,
      this.props.selectedAlbum,
      this.props.listType
    );
    return (
      <div id="main-content" className="album window window-full">
        <div id="title-bar">
          <h1>{this.props.selectedAlbum}</h1>
        </div>
        <ListToggle onListToggleClick={this.props.onListToggleClick}
                    listType={this.props.listType} />
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
      selectedAlbum: "Todos",
      listType: "tile" 
    };
  },
  handleMenuClick: function(albumName) {
    this.setState({selectedAlbum: albumName});
  },
  handleListSwitch: function(listType) {
    this.setState({listType: listType});
  },
  render: function() {
    return (
      <div>
        <div id="content" className="window window-full">
          <Navbar albums={this.props.albums}
                  selectedAlbum={this.state.selectedAlbum}
                  onItemClick={this.handleMenuClick} />
          <PhotoList photos={this.props.photos}
                     listType={this.state.listType}
                     selectedAlbum={this.state.selectedAlbum}
                     onListToggleClick={this.handleListSwitch} />
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
  {name: "Nueva York", cover_photo: "9.jpg"}
]

ReactDOM.render(
  <PhotoViewer photos={photos} albums={albums} />,
  document.getElementById('app')
);
