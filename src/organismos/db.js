import drkmoon from '../img/DARKMOON.png'
import FC24 from '../img/METEORITE.png'
import Party from '../img/Lusats.png'
import stray from '../img/Digger.png'
import TLOU1 from '../img/MALENIA.png'
import RE4 from '../img/SABUESO.png'
import gears2 from '../img/Rivers B.png'
import sekiro from '../img/MORGOTT.png'
import Final from "../img/ESPADON.jpg";
import Cyber from "../img/GODKILLER.jpg";
import Halo from "../img/ORDOVIS.jpg";
import Sekiro from "../img/DRAGON.jpg";

const DB = {
  whatchGamesp: "ARMAS DE INTELIGENCIA",
  whatchOfertas :"ARMAS DE DESTREZA",
  whatchNoticias : "ARMAS DE FUERZA",
  gamesp: [
    {
      title: "DARKMOON GREATSWORD",
      description: "Elegante espada lunar que desencadena ataques mágicos oscuros. Su hoja resplandece con la luz de la luna, otorgando un toque de elegancia letal a los portadores que buscan canalizar el poder de la oscuridad.",
      album: drkmoon, 
    },
    {
      title: "Meteorite Staff",
      description: "Bastón cósmico con núcleo de meteorito, lanza hechizos estelares devastadores. Su diseño majestuoso canaliza el poder de las estrellas, haciendo de este bastón una herramienta imprescindible para los hechiceros que buscan dominar el cosmos.",
      album: FC24, 
    },
    {
      title: "Lusat's Glintstone Staff",
      description: "Antiguo bastón con piedras brillantes, manipula la luz para cegar enemigos y fortalecer al usuario. Su aura resplandece con un encanto antiguo, convirtiéndolo en una elección sublime para aquellos que buscan el equilibrio entre la luz y la sombra.",
      album: Party, 
    },
    {
      title: "Digger's Staff",
      description: "Bastón conectado a la tierra que manipula el suelo para defensa y ataque. Su diseño rústico refleja la conexión con la naturaleza, ofreciendo a los hechiceros una herramienta versátil para controlar los elementos terrestres.",
      album: stray, 
    },
  ],

  ofertas:[
    {
      title: "BloodHound Sword",
      description: "Espada sanguinaria con filo afilado como colmillos, drena la vida de los enemigos. Atemorizante y letal, esta espada encarna la sed de batalla y la ferocidad en el combate",
      album: RE4,
    },
    {
      title: "Hand of Malenia",
      description: "Arma oscura que desgarra la realidad, emitiendo un aura malevolente. Su estilo siniestro y enigmático la convierte en la elección de aquellos que buscan poder oscuro y misterioso.",
      album: TLOU1,
    },
    {
      title: "Rivers of Blood",
      description: "Espada sangrienta que realiza ataques rápidos y letales. Deja un rastro de destrucción, encarnando la ferocidad en cada movimiento para aquellos guerreros que buscan la eficiencia letal.",
      album: gears2,
    },
    {
      title: "Morgott's Cursed Sword",
      description: "Espada maldita que emana oscuridad y desesperación. Inflige males insondables, su estilo tenebroso y malévolo la convierte en una elección temida por aquellos que buscan sumergirse en las sombras.",
      album: sekiro,
    },
  ],

  noticias : [
    {
      title: "Greatsword",
      description: "Gran espada brutal y contundente, realiza potentes ataques. Aunque su diseño sea simple, su letalidad es innegable, ofreciendo a los guerreros una herramienta directa y efectiva en el campo de batalla.",
      album: Final,
    },
    {
      title: "Cyberpunk 2077",
      description: "Espada divina que anula las defensas celestiales con su luz sagrada. Su estilo reverente y celestial la convierte en la elección predilecta para aquellos guerreros destinados a enfrentarse a dioses y criaturas celestiales.",
      album: Cyber,
    },
    {
      title: "God's Slayer",
      description: "Gran espada con llamas ardientes que causan daño y quemaduras. Su estilo abrasador y poderoso hace de esta arma una elección ardiente para aquellos que buscan incinerar a sus enemigos con cada golpe.",
      album: Halo,
    },
    {
      title: "Magma Wyrm's Scalesword",
      description: "Espada única hecha con escamas de dragón de magma. Emite calor intenso, su diseño letal y único la convierte en una elección indiscutible para aquellos guerreros que buscan una arma letal y exclusiva.",
      album: Sekiro,
    },
  ]
};

export default DB;
