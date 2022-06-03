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
    <Router basename="/aprendiendo-ia">
        <Routes>
        <Route path={'${process.env.PUBLIC_URL}/'} element={<BusquedaEnAnchura/>} />
        <Route path={'${process.env.PUBLIC_URL}/conceptos/inteligencia-artificial'} element={<InteligenciaArtificial/>} />
        <Route path={'${process.env.PUBLIC_URL}/conceptos/algoritmos'} element={<Algoritmos/>} />
        <Route path={'${process.env.PUBLIC_URL}/conceptos/grafos'} element={<Grafos/>} />
        <Route path={'${process.env.PUBLIC_URL}/conceptos/grafos-no-dirigidos'} element={<GrafosNoDirigidos/>} />
        <Route path={'${process.env.PUBLIC_URL}/conceptos/grafos-dirigidos'} element={<GrafosDirigidos/>} />
        <Route path={'${process.env.PUBLIC_URL}/conceptos/arboles'} element={<Arboles/>} />
        <Route path={'${process.env.PUBLIC_URL}/conceptos/heuristicas'} element={<Heuristicas/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-no-informada'} element={<BusquedaNoInformada/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-en-anchura'} element={<BusquedaEnAnchura/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-en-anchura-costo-uniforme'} element={<BusquedaEnAnchuraCostoUniforme/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-en-profundidad'} element={<BusquedaEnProfundidad/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-en-profundidad-limitada'} element={<BusquedaEnProfundidadLim/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-en-profundidad-limitada-iterativa'} element={<BusquedaEnProfundidadLimIt/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-bidireccional'} element={<BusquedaBidireccional/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-informada'} element={<BusquedaInformada/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-greedy'} element={<BusquedaGreedy/>} />
        <Route path={'${process.env.PUBLIC_URL}/busqueda-a'} element={<BusquedaA/>} />
        <Route element={<BusquedaEnAnchura/>} />
        </Routes>
    </Router>
  );
}

export default App;


