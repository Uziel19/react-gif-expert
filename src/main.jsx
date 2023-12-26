import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css'; //colocando los estilos de forma global para toda la app

//modulos basados en responsabilidades

ReactDOM.createRoot(document.getElementById('root')).render(

  // El modo estricto de react solo se aplica en desarrollo

  //Deshabilitando el modo estricto

  //El modo estricto nos esta ayundando a determinar de que todo funcione como nosotros esperamos
  //Es algo que se recomienda usar por que es algo que ayuda a que nosotros programemos de la manera que react esper
//  <React.StrictMode> 
    <GifExpertApp />
// </React.StrictMode>,
);
