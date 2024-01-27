import React from "react";
import Noticias from "../organismos/noticiasG";
import Ofertas from "../organismos/ofertasG";
import Lanzamientos from "../organismos/gamesp";
import Pagina from "../atomos/nombrePagina";
import Presentacion from "../moleculas/Presentacion";
function blog (){
    return(
        <div>
        <Pagina/>   
        <Presentacion />
        <Noticias/>
        <Ofertas/>
        <Lanzamientos/>
        </div>
        
    );

}
export default blog;