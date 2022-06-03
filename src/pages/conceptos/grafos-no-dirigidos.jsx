import React from 'react'
import { connect } from 'react-redux'
import { Sidenav } from '../../sidenav.js'
import { Header } from '../../header.js'
import { Footer } from "../../footer.jsx"
import { DropdownItem } from "../../dropdown.js"
import { Slideshow } from "../../slideshow.js"
import '../../css/page.css'
import placeholder from '../../assets/images/placeholder.png'

export default class GrafosNoDirigidos extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Grafos No Dirigidos</h1>

      <div className="page-section">
        <p> El grafo no dirigido es el tipo más simple de grafo: un conjunto de nodos y aristas que los conectan, sin ninguna restricción o patrón especial.</p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>
          En un grafo no dirigido, las aristas representan una conexión <em>simétrica</em>, lo que quiere decir que es mutua. Por ejemplo, en un grafo que representa un mapa:
        </p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>
          La arista <strong><em>AB</em></strong> significa que podemos viajar desde A hacia B, o desde B hacia A.
          Otro ejemplo son las redes de amistades:
        </p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>
          Y aquí, la arista <strong><em>AB</em></strong> significa que A es amigo de B, y B es amigo de A también.
        </p>
        <p>
          Sin embargo, este tipo de grafos a veces no es suficiente para representar algunos tipos de problemas. ¿Qué hacemos si queremos representar conexiones que no son simétricas, como calles de una sola vía, o relaciones sociales que no son mutuas?
        </p>
        <p>
          Para este tipo de casos existen otros tipos de grafos con características especiales que representan estas restricciones, como los <a href="/conceptos/grafos-dirigidos">grafos dirigidos</a> y los <a href="/conceptos/arboles">árboles</a>.
        </p>
      </div>
      
      <Footer prevName="Grafos" prevURL="/conceptos/grafos" nextName="Grafos Dirigidos" nextURL="/conceptos/grafos-dirigidos"/>
    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

//export default connect(mapStateToProps)(GrafosNoDirigidos)