import React from "react";
import CardMusic from "../moleculas/cards";
import Style from '../css/Cards.module.css'
import Boton from "../atomos/botonTitle";
import DB from "./db";



export default function Ofertas() {
  return (
    <div>
      <Boton whatch={DB.whatchOfertas} />
      <div className={Style.row}>
        {DB.ofertas.map((card, index) => (
          <CardMusic
            watch={DB.hatch}
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
