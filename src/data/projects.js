// Importamos las imagenes para que Vite resuelva su URL final
import coffeeShop from "../assets/img/coffeshop.png";
import webMovies from "../assets/img/PracticeWebMovies.png";
import qrGenerator from "../assets/img/QrGenerator.png";

//lista de proyectos
export const projects = [
  {
    title: "coffe Shop",
    description: "Landing page de una cafeteria, maquetada con html y css.",
    image: coffeeShop,
    url: "https://davidvanegas720.github.io/CoffeShopPractice/",
  },
  {
    title: 'Web Movies',
    description: 'Interfaz tipo Netflix para explorar películas.',
    image: webMovies,
    url: 'https://davidvanegas720.github.io/practica-pagina-web-tipo-netflix/',
  },
   {
    title: 'QR Generator',
    description: 'Generador de códigos QR hecho con JavaScript.',
    image: qrGenerator,
    url: 'https://davidvanegas720.github.io/GeneradorQRJavaScript/',
  },
];
