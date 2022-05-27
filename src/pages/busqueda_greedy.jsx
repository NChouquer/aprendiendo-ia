import React from 'react'
import { connect } from 'react-redux'
import {Sidenav} from '../sidenav.js'
import {Header} from '../header.js'
import {Footer} from "../footer.jsx"
import {DropdownItem} from "../dropdown.js"
import {Slideshow} from "../slideshow.js"
import '../css/page.css'
import bfs1 from '../assets/images/bfs_1.png'
import bfs2 from '../assets/images/bfs_2.png'
import placeholder from '../assets/images/placeholder.png'

class BusquedaGreedy extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Búsqueda Greedy</h1>

      <div className="page-section">
        <p>Lorem ipsum dolor sit amet. Qui nostrum et enim deserunt non sunt exercitationem et minima voluptatem. Et iste recusandae et officiis ipsam est facilis accusamus. Non impedit omnis est aperiam voluptatem et excepturi dolorum qui magnam dolor ut doloremque ipsam aut sint quidem.</p>
      </div>

      <div className="page-img"></div>

      <div className="page-section">
        <h2>¿Qué es la Búsqueda Greedy?</h2>
        <p>En la búsqueda Greedy, el siguiente paso a tomar siempre será el que parece más conveniente en el momento, es decir el que nos deje a menor distancia de la meta, pero sin tomar en cuenta que ese camino podría volverse generalmente menos bueno más adelante. Se utiliza una <a href="#">heurística</a> para determinar qué determina el estado más “conveniente” para ese problema en particular.</p>
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
      <Footer prevName="Búsqueda informada" prevURL="/busqueda-informada" nextName="Búsqueda A*" nextURL="/busqueda-a"/>
    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(BusquedaGreedy)