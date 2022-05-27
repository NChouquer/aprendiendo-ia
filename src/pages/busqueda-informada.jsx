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

class BusquedaInformada extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Búsqueda Informada</h1>
      <Footer prevName="Búsqueda bidireccional" prevURL="/conceptos/busqueda-bidireccional" nextName="Búsqueda greedy" nextURL="/busqueda-greedy"/>
    </div>
    
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(BusquedaInformada)