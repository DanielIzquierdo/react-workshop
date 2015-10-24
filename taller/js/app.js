

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

var s = {"margin": "80px auto", "textAlign":"center"}

ReactDOM.render(
  <h1 style={s}>How You Doin'?</h1>,
  document.getElementById('app')
);
