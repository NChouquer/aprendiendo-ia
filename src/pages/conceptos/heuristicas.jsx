import React from 'react'
import { connect } from 'react-redux'
import { Sidenav } from '../../sidenav.js'
import { Header } from '../../header.js'
import { Footer } from "../../footer.jsx"
import { DropdownItem } from "../../dropdown.js"
import { Slideshow } from "../../slideshow.js"
import '../../css/page.css'
import placeholder from '../../assets/images/placeholder.png'

export default class Heuristicas extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Heurísticas</h1>

      <div className="page-section">
        <p>
          A veces, nos encontramos con problemas que son demasiado difíciles de resolver con exactitud, incluso para un computador. En estos casos, es posible que en vez de buscar la mejor solución posible, nos conformemos con encontrar una solución <em>suficientemente</em> buena.
        </p>
        <p>
          Una <strong>heurística</strong> es un método para aproximar el costo o beneficio de realizar una acción, y así guiar una búsqueda.
        </p>
        <p>
          Por ejemplo, si estamos intentando determinar la longitud de una carretera para realizar una búsqueda en un mapa, sería casi imposible determinar la medida exacta de la carretera, que puede tener curvas y cambios de elevación. Pero, para estimar su longitud, podemos dibujar una línea recta entre las dos ciudades que conecta la carretera, y considerar el largo de esta línea como el largo de la carretera.
        </p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>
          En este caso, la heurística sería <em>"Distancia en línea recta entre dos ciudades"</em>.
        </p>
        <p>Una heurística no necesita ser precisa, pero para poder encontrar soluciones buenas con algoritmos de búsqueda, debemos intentar encontrar la heurística más apropiada para el problema particular que estamos intentando solucionar.</p>
      </div>
      <div className="page-section">
        <h2>Heurísticas Admisibles</h2>
        <p>
          Una heurística <em>admisible</em> es una que nos proporcionará soluciones útiles para nuestro problema. Para que una heurística se considere admisible, debe cumplir una de estas condiciones, según la forma en que modelamos el problema:
          <ul>
            <li>Si modelamos la situación como un <a href="/conceptos/arboles">árbol</a>, entonces la estimación que nos entrega la heurística debe ser menor o igual que el valor real. En el ejemplo anterior, sabemos que la distancia en línea recta es una heurística admisible porque es la distancia mínima entre dos puntos. Si la carretera real fuera una línea recta, entonces la estimación  sería igual al valor real, pero si la carretera real tuviera cualquier tipo de curvatura, entonces la estimación será siempre menor al valor real.</li>
            <li>
              Si modelamos la situación como cualquier otro tipo de <a href="/conceptos/grafos">grafo</a>, entonces la heurística debe cumplir una condición llamada <em>consistencia</em>: Si tenemos un nodo <em>B</em>, al que podemos llegar directamente desde un nodo <em>A</em>, entonces el costo estimado de <em>A</em> debe ser menor o igual al costo de moverse desde <em>A</em> hacia <em>B</em>, más el costo estimado de <em>B</em>.
            </li>
          </ul>
          <img src={placeholder} className="page-img" alt="pic"></img>
        </p>
        <p>
          El uso de heurísticas es lo que diferencia a las <a href="/busqueda-no-informada">búsquedas no informadas</a> de las <a href="/busqueda-informada">búsquedas informadas</a>. Las búsquedas informadas son las que hacen uso de heurísticas, y las no informadas son las que no las utilizan.
        </p>
      </div>
      <Footer prevName="Árboles" prevURL="/conceptos/arboles" nextName="Búsqueda No Informada" nextURL="/busqueda-no-informada"/>
    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

//export default connect(mapStateToProps)(Heuristicas)
