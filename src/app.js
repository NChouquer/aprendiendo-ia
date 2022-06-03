import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InteligenciaArtificial from './pages/conceptos/inteligencia-artificial'
import Algoritmos from './pages/conceptos/algoritmos'
import Grafos from './pages/conceptos/grafos'
import GrafosNoDirigidos from './pages/conceptos/grafos-no-dirigidos'
import GrafosDirigidos from './pages/conceptos/grafos-dirigidos'
import Arboles from './pages/conceptos/arboles'
import Heuristicas from './pages/conceptos/heuristicas'
import BusquedaNoInformada from './pages/busqueda-no-informada'
import BusquedaEnAnchura from './pages/busqueda_en_anchura'
import BusquedaEnAnchuraCostoUniforme from './pages/busqueda-en-anchura-costo-uniforme'
import BusquedaEnProfundidad from './pages/busqueda_en_profundidad'
import BusquedaEnProfundidadLim from './pages/busqueda_en_profundidad_limitada'
import BusquedaEnProfundidadLimIt from './pages/busqueda_en_profundidad_limitada_iterativa'
import BusquedaBidireccional from './pages/busqueda_bidireccional'
import BusquedaInformada from './pages/busqueda-informada'
import BusquedaGreedy from './pages/busqueda_greedy'
import BusquedaA from './pages/busqueda_a'

const App = () => {
  return (
    <Router basename="/aprendiendo-ia/">
        <Routes>
        <Route path="/" element={<BusquedaEnAnchura/>} />
        <Route path="/aprendiendo-ia/conceptos/inteligencia-artificial" element={<InteligenciaArtificial/>} />
        <Route path="/aprendiendo-ia/conceptos/algoritmos" element={<Algoritmos/>} />
        <Route path="/aprendiendo-ia/conceptos/grafos" element={<Grafos/>} />
        <Route path="/aprendiendo-ia/conceptos/grafos-no-dirigidos" element={<GrafosNoDirigidos/>} />
        <Route path="/aprendiendo-ia/conceptos/grafos-dirigidos" element={<GrafosDirigidos/>} />
        <Route path="/aprendiendo-ia/conceptos/arboles" element={<Arboles/>} />
        <Route path="/aprendiendo-ia/conceptos/heuristicas" element={<Heuristicas/>} />
        <Route path="/aprendiendo-ia/busqueda-no-informada" element={<BusquedaNoInformada/>} />
        <Route path="/aprendiendo-ia/busqueda-en-anchura" element={<BusquedaEnAnchura/>} />
        <Route path="/aprendiendo-ia/busqueda-en-anchura-costo-uniforme" element={<BusquedaEnAnchuraCostoUniforme/>} />
        <Route path="/aprendiendo-ia/busqueda-en-profundidad" element={<BusquedaEnProfundidad/>} />
        <Route path="/aprendiendo-ia/busqueda-en-profundidad-limitada" element={<BusquedaEnProfundidadLim/>} />
        <Route path="/aprendiendo-ia/busqueda-en-profundidad-limitada-iterativa" element={<BusquedaEnProfundidadLimIt/>} />
        <Route path="/aprendiendo-ia/busqueda-bidireccional" element={<BusquedaBidireccional/>} />
        <Route path="/aprendiendo-ia/busqueda-informada" element={<BusquedaInformada/>} />
        <Route path="/aprendiendo-ia/busqueda-greedy" element={<BusquedaGreedy/>} />
        <Route path="/aprendiendo-ia/busqueda-a" element={<BusquedaA/>} />
        <Route element={<BusquedaEnAnchura/>} />
        </Routes>
    </Router>
  );
}

export default App;


