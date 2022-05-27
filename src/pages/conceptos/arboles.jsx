import React from 'react'
import { connect } from 'react-redux'
import { Sidenav } from '../../sidenav.js'
import { Header } from '../../header.js'
import { Footer } from "../../footer.jsx"
import { DropdownItem } from "../../dropdown.js"
import { Slideshow } from "../../slideshow.js"
import '../../css/page.css'
import placeholder from '../../assets/images/placeholder.png'

class Arboles extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Árboles</h1>

      <div className="page-section">
      <p> 
        Un <strong>árbol</strong> es un tipo de grafo con una estructura especial. Como indica su nombre, se asemeja a las ramas de un árbol:
      </p>
      <img src={placeholder} className="page-img" alt="pic"></img>
      <p>
        Un árbol es un grafo sin cilos, es decir, no podemos formar ninguna figura cerrada con sus aristas. Los siguientes grafos tienen ciclos, y por lo tanto <strong>no son árboles</strong>:
      </p>
      <img src={placeholder} className="page-img" alt="pic"></img>
      <p>Un árbol también puede ser un grafo dirigido, en el que uno de los nodos será llamado raíz. Todas las aristas apuntarán hacia la raíz, o todas apuntarán en la dirección contraria a la raíz.</p>
      <img src={placeholder} className="page-img" alt="pic"></img>
      <p>
        En un árbol con raíz, un nodo se denomina <em>padre</em> de los nodos que descienden de él, es decir, si un nodo llamado A tiene una arista que empieza en él y termina en un nodo B, entonces A es padre de B, y B es hijo de A.
      </p>
      <img src={placeholder} className="page-img" alt="pic"></img>
      <p>
        Los árboles se utilizan para representar jerarquías o descendencia, por ejemplo en árboles genealógicos:
      </p>
      <img src={placeholder} className="page-img" alt="pic"></img>
      <p>También podemos utilizarlos para representar un proceso de toma de decisiones:</p>
      <img src={placeholder} className="page-img" alt="pic"></img>
      </div>
      
      <Footer prevName="Grafos Dirigidos" prevURL="/conceptos/grafos-dirigidos" nextName="Heurísticas" nextURL="/conceptos/heuristicas"/>
    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(Arboles)