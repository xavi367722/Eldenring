import React from "react";
import Boton from "../atomos/botonTitle";
import CardMusic from "../moleculas/cards";
import Style from '../css/Cards.module.css';
import DB from "./db";


export default function GamesL() {
  return (
    <div>
      <Boton whatch={DB.whatchGamesp} />
      <div className={Style.row}>
        {DB.gamesp.map((card, index) => (
          <CardMusic
            watch={DB.watch}
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
