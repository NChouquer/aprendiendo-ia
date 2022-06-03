import React from 'react'
import { connect } from 'react-redux'
import { Sidenav } from '../../sidenav.js'
import { Header } from '../../header.js'
import { Footer } from "../../footer.jsx"
import { DropdownItem } from "../../dropdown.js"
import { Slideshow } from "../../slideshow.js"
import '../../css/page.css'
import placeholder from '../../assets/images/placeholder.png'

export default class GrafosDirigidos extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Grafos Dirigidos</h1>

      <div className="page-section">
        <p>
          Supongamos que queremos representar una ciudad con un grafo, donde las aristas son calles y los nodos son intersecciones entre calles, y dibujamos algo así: 
        </p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>
          Aquí, la arista entre A y B significa que podemos desplazarnos desde A hacia B, y desde B hacia A (es decir, la relación es simétrica). Sin embargo, en la vida real muchas calles tienen una sola vía; no sería posible conducir un auto en cualquier dirección, pues tenemos que seguir una dirección determinada obligadamente. Para este tipo de situaciones existe el <strong>grafo dirigido</strong>:
        </p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>
          En este tipo de grafo, cada arista tiene una sola dirección. Por ejemplo en este grafo dirigido, podemos desplazarnos desde A hacia B, pero no podemos volver a A directamente desde B, porque no existe una arista que empiece en B y apunte hacia A. Pero podemos volver a A siguiendo las flechas:
         </p>
         <img src={placeholder} className="page-img" alt="pic"></img>
         <p>
           Esto se asemeja a cuando un auto accidentalmente se pasa de su destino. Muchas veces no podemos poner el auto en reversa para volver atrás, sino que hay que seguir avanzando y girar alrededor de la cuadra. 
         </p>
      </div>
      
      <Footer prevName="Grafos No Dirigidos" prevURL="/conceptos/grafos-no-dirigidos" nextName="Árboles" nextURL="/conceptos/arboles"/>
    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

//export default connect(mapStateToProps)(GrafosDirigidos)