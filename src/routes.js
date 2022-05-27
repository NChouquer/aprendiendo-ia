import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {App} from './app.js'
import {BusquedaEnAnchura} from '../pages/busqueda_en_anchura.js'
import {BusquedaEnProfundidad} from '../pages/busqueda_en_profundidad.js'
export default function Routes() {
  return (
    //<Router>
      <Routes>
        <Route path="/" element={<BusquedaEnAnchura/>} />
        <Route path="/busqueda-en-anchura" element={<BusquedaEnAnchura/>} />
        <Route path="/busqueda-en-profundidad" element={<BusquedaEnProfundidad/>} />
        <Route element={<BusquedaEnAnchura/>} />
      </Routes>
    //</Router>
  );
}


/*import App from './app.js'
import { Route } from 'react-router'
import React from 'react'
const routes = (
  <div>
    <Route exact path="/" component={App} />
  </div>
)
export default routes
*/