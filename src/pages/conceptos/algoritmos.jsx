import React from 'react'
import { connect } from 'react-redux'
import { Sidenav } from '../../sidenav.js'
import { Header } from '../../header.js'
import { Footer } from "../../footer.jsx"
import { DropdownItem } from "../../dropdown.js"
import { Slideshow } from "../../slideshow.js"
import '../../css/page.css'
import placeholder from '../../assets/images/placeholder.png'

export default class Algoritmos extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Algoritmos</h1>

      <div className="page-section">
      </div>
      
      <Footer prevName="Inteligencia Artificial" prevURL="/conceptos/inteligencia-artificial" nextName="Grafos" nextURL="/conceptos/grafos"/>
    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

//export default connect(mapStateToProps)(Algoritmos)