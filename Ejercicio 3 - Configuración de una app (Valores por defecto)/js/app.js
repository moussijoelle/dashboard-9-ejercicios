const config = {
  tema: "oscuro"
  // El idioma no viene aquí
};

const { tema, idioma = "es" } = config;

console.log(tema, idioma);
