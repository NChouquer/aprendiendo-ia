import React from 'react'
import { connect } from 'react-redux'
import {Sidenav} from '../sidenav.js'
import {Header} from '../header.js'
import {DropdownItem} from "../dropdown.js"
import {Slideshow} from "../slideshow.js"
import {Footer} from "../footer.jsx"
import '../css/page.css'
import bfs1 from '../assets/images/bfs_1.png'
import bfs2 from '../assets/images/bfs_2.png'
import bfs3 from '../assets/images/bfs_3.png'
import placeholder from '../assets/images/placeholder.png'

class BusquedaEnAnchura extends React.Component {

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
        <Slideshow numSlides="3" slideData={[
          {
            imgURL: bfs1,
            text: "Crearemos una cola de los nodos pendientes de explorar, y pondremos al nodo A en ella."
          },
          {
            imgURL: bfs2,
            text: "Ahora exploraremos el nodo A, revelando los dos nodos que pueden alcanzarse desde él.\nComo ya visitamos A, lo marcaremos como explorado, lo quitaremos de la cola, y encolaremos B y C."
          },
          {
            imgURL: bfs3,
            text: "Como B es el primero en la cola, exploraremos los nodos que se pueden alcanzar desde él. Luego marcamos a B como explorado, lo quitaremos de la cola y añadiremos a D y E."
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
      <Footer prevName="Búsqueda no informada" prevURL="/busqueda-no-informada" nextName="Búsqueda en anchura con costo uniforme" nextURL="/busqueda-en-anchura-costo-uniforme"/>
    </div>
    
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(BusquedaEnAnchura)