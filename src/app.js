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
    <Router>
        <Routes>
        <Route path="/" element={<BusquedaEnAnchura/>} />
        <Route path="/conceptos/inteligencia-artificial" element={<InteligenciaArtificial/>} />
        <Route path="/conceptos/algoritmos" element={<Algoritmos/>} />
        <Route path="/conceptos/grafos" element={<Grafos/>} />
        <Route path="/conceptos/grafos-no-dirigidos" element={<GrafosNoDirigidos/>} />
        <Route path="/conceptos/grafos-dirigidos" element={<GrafosDirigidos/>} />
        <Route path="/conceptos/arboles" element={<Arboles/>} />
        <Route path="/conceptos/heuristicas" element={<Heuristicas/>} />
        <Route path="/busqueda-no-informada" element={<BusquedaNoInformada/>} />
        <Route path="/busqueda-en-anchura" element={<BusquedaEnAnchura/>} />
        <Route path="/busqueda-en-anchura-costo-uniforme" element={<BusquedaEnAnchuraCostoUniforme/>} />
        <Route path="/busqueda-en-profundidad" element={<BusquedaEnProfundidad/>} />
        <Route path="/busqueda-en-profundidad-limitada" element={<BusquedaEnProfundidadLim/>} />
        <Route path="/busqueda-en-profundidad-limitada-iterativa" element={<BusquedaEnProfundidadLimIt/>} />
        <Route path="/busqueda-bidireccional" element={<BusquedaBidireccional/>} />
        <Route path="/busqueda-informada" element={<BusquedaInformada/>} />
        <Route path="/busqueda-greedy" element={<BusquedaGreedy/>} />
        <Route path="/busqueda-a" element={<BusquedaA/>} />
        <Route element={<BusquedaEnAnchura/>} />
        </Routes>
    </Router>
  );
}

export default App;

/*import React from 'react'
import { connect } from 'react-redux'
import './app.css'
import {Sidenav} from './sidenav.js'
import {Header} from './header.js'
import {DropdownItem} from "./dropdown.js";
import {Slideshow} from "./slideshow.js"
import bfs1 from './assets/images/bfs_1.png'
import bfs2 from './assets/images/bfs_2.png'

class App extends React.Component {
  componentDidMount () {
    this.props.initialize()
  }
  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Búsqueda en Anchura</h1>

      <div className="page-section">
        <p>Lorem ipsum dolor sit amet. Qui nostrum et enim deserunt non sunt exercitationem et minima voluptatem. Et iste recusandae et officiis ipsam est facilis accusamus. Non impedit omnis est aperiam voluptatem et excepturi dolorum qui magnam dolor ut doloremque ipsam aut sint quidem.</p>
      </div>

      <div className="page-img"></div>

      <div className="page-section">
        <h2>¿Qué es la Búsqueda en Anchura?</h2>
        <p>En la búsqueda en anchura, se exploran todos los estados que podemos tomar desde el estado en que nos encontramos actualmente. Una vez que se han explorado todos, se explorarán las acciones que podemos tomar desde cada uno de los nuevos estados, y así sucesivamente. Con la búsqueda en anchura, podemos encontrar el camino más corto entre dos estados.</p>
      </div>

      <div className="page-section">
        <h2>Pasos</h2>
        <Slideshow numSlides="2" slideData={[
          {
            imgURL: bfs1,
            text: "Crearemos una cola de los nodos pendientes de explorar, y pondremos al nodo A en ella."
          },
          {
            imgURL: bfs2,
            text: "Ahora exploraremos el nodo A, revelando los dos nodos que pueden alcanzarse desde él.\nComo ya visitamos A, lo marcaremos como explorado, lo quitaremos de la cola, y encolaremos B y C."
          }
          ]}/>
          
      </div>

      <div className="page-section">
        <h2>Ejemplos</h2>
        <h3>Navegar un mapa</h3>
        <div className="simulator">
          <iframe src="https://nchouquer.github.io/pathfinding-sim/" width="600" height="400"></iframe>
        </div>
        <DropdownItem title="Explicación del problema" theme="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vulputate magna quis libero efficitur fringilla non non ex. Donec turpis
          ligula, pellentesque eget rutrum eu, mollis ac eros. Aliquam rhoncus
          rhoncus ante ac maximus. Donec malesuada enim massa, sit amet
          consectetur lectus accumsan eget. Nullam faucibus urna vel ex volutpat
          auctor. Quisque lacinia tellus vel lacus pulvinar, eget euismod dolor
          interdum. Duis congue nisl non posuere vestibulum. Donec condimentum
          vestibulum nunc, eget vulputate ex vulputate eget.
      </DropdownItem>
      </div>

    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, { initialize })(App)*/
