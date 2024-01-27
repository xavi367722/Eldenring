import React from 'react'
import Styles from '../css/Cards.module.css';
import poster from "../img/poster.png";
export default function Presentacion() {
    const titulo = "ELDEN RIWIKI es el destino definitivo para todos los amantes de ELDEN RING"
    const subtitulo="Bienvenido a ELDEN RIWIKI, tu portal definitivo para todo lo relacionado con el emocionante mundo de las tierras intermedias. En ELDEN RIWIKI somos apasionados por ELDEN RING y estamos comprometidos a ofrecerte la mejor experiencia en cuanto informacion de armas se refiere. Ya seas un jugador casual, un entusiasta experimentado o un curioso que está empezando, ¡Tenemos las armas que te pueden servir para iniciar tu aventura!"
    const foto = poster
  return (
    <>
        <div className={Styles.contenedorPre}>
            <div>
                <h1>{titulo}</h1>
            </div>
            <div className={Styles.seccionPre}>
           
            <p>{subtitulo}</p>
       
        
            <img src={foto} alt="img" className={Styles.imgPre}/>
    
       
            </div>
        </div>
    </>
  )
}
