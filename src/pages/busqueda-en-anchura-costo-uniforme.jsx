import React from 'react'
import { connect } from 'react-redux'
import {Sidenav} from '../sidenav.js'
import {Header} from '../header.js'
import {DropdownItem} from "../dropdown.js"
import {Slideshow} from "../slideshow.js"
import {Footer} from "../footer.jsx"
import '../css/page.css'
import placeholder from '../assets/images/placeholder.png'

export default class BusquedaEnAnchuraCostoUniforme extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Búsqueda en Anchura con Costo Uniforme</h1>
      <Footer prevName="Búsqueda en anchura" prevURL="/busqueda-en-anchura" nextName="Búsqueda en profundidad" nextURL="/busqueda-en-profundidad"/>
    </div>
    
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

//export default connect(mapStateToProps)(BusquedaEnAnchuraCostoUniforme)