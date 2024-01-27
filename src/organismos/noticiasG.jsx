import React from "react";
import CardMovie from "../moleculas/cards";
import Boton from "../atomos/botonTitle";
import Style from '../css/Cards.module.css';
import DB from "./db";


function Noticias() {


  

  return (
    <div>
      <Boton whatch={DB.whatchNoticias}   className={Style.btnPro}/>
      <div className={Style.row} >
        {DB.noticias.map((card, index) => (
          <CardMovie
            watch={DB.whatchNoticias}
            key={index}
            title={card.title}
            description={card.description}
            album={card.album}
          />
        ))}
      </div>
    </div>
  );
}

export default Noticias;
