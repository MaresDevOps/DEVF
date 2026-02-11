const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anio: 1967,
  estado: "disponible",

  describirLibro: function() {
    console.log("Libro titulado " + this.titulo + ", escrito por " + this.autor + " en el año " + this.anio + ", el estado es: " + this.estado + ".");
  }
};

libro.describirLibro();

libro.estado = "prestado";

libro.describirLibro();