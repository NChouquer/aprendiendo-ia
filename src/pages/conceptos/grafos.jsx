import React from 'react'
import { connect } from 'react-redux'
import { Sidenav } from '../../sidenav.js'
import { Header } from '../../header.js'
import { Footer } from "../../footer.jsx"
import { DropdownItem } from "../../dropdown.js"
import { Slideshow } from "../../slideshow.js"
import '../../css/page.css'
import placeholder from '../../assets/images/placeholder.png'

class Grafos extends React.Component {

  render() {
    return (
    <div className="page">
    <Header/>
    <Sidenav/>
    <div className="page-content">
      <h1>Grafos</h1>

      <div className="page-section">
        <p>Cuando queremos que un computador resuelva un problema, necesitamos describir la situación de una forma que el computador pueda entender, y que sea simple de explicar para nosotros. 
        Imagina que quisieras, por ejemplo, usar un computador para encontrar el camino más corto entre dos ciudades de un mapa como este:</p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>¿Cuánto trabajo sería darle al computador una descripción completa de cada centímetro de todas las carreteras? 
        ¿Y cuánta memoria necesitaría el computador para almacenar y leer toda esta información?</p>
        <p>
        Para ayudarnos en la tarea de resolver problemas creamos <strong>modelos</strong>; versiones simplificadas de una situación que contienen solamente la información estrictamente necesaria para resolver un problema.
        </p>
        <p>Volviendo al ejemplo de las carreteras, si pensamos en la pregunta <em>¿Cuál es el camino más corto entre dos ciudades?</em> la única información que necesitamos conocer es:</p>
        <ul>
          <li>La longitud de las carreteras, porque estamos calculando distancias.</li>
          <li>A qué ciudades está conectada cada carretera, para saber cuáles nos sirven para llegar al objetivo.</li>
        </ul>
        <p>No necesitamos conocer qué objetos hay en la carretera, ni siquiera si es recta o si tiene curvas. 
        La longitud es el único dato que necesitamos para calcular distancia. Por eso, podríamos representar el mapa anterior de la siguiente forma:</p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>Así, por ejemplo, podemos calcular la longitud de este camino:</p>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>Este tipo de modelo, donde los puntos representan lugares a los que podemos llegar, y las líneas representan conexiones entre estos lugares, 
        se llama <strong><em>grafo</em></strong>, y podemos utilizarlo para simplificar muchos tipos de problemas.</p>
      </div>

      <div className="page-section">
        <h2>Definición de Grafo</h2>
        <p>Un grafo es un conjunto de puntos, llamados <em>nodos</em> o <em>vértices</em>, conectados por un conjunto de líneas, llamadas <em>aristas</em>.</p>
      </div>
      <div className="page-section">
        <h2>Aplicaciones</h2>
        <p>Los grafos pueden utilizarse para representar una variedad de situaciones, por ejemplo:</p>
        <h3>Redes de Internet</h3>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <h3>Mapas</h3>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <h3>Árboles genealógicos</h3>
        <img src={placeholder} className="page-img" alt="pic"></img>
        <p>Los métodos de búsqueda más utilizados en inteligencia artificial fueron creados para utilizarse en grafos, 
        por lo que es importante conocerlos para entender cómo funcionan estos métodos.</p>
      </div>
      <div className="page-section">
        <h2>Tipos de grafos</h2>
        <p>Para poder representar ciertos tipos de problemas de forma más apropiada, existen varios tipos de grafos con características especiales. Algunos de los más comunes son:</p>
        <ul>
          <li><a href="#">Grafos dirigidos</a> o <em>digrafos</em>, cuyas aristas representan una conexión que solamente tiene 1 dirección.</li>
          <li><a href="#">Grafos con peso</a>, donde cada arista tiene un valor, llamado peso, que representa alguna información sobre la conexión.</li>
          <li><a href="#">Árboles</a>, grafos que tienen 1 nodo raíz y una estructura jerárquica, como las ramas de un árbol.</li>
        </ul>
      </div>
      
      <Footer prevName="Algoritmos" prevURL="/conceptos/algoritmos" nextName="Grafos no dirigidos" nextURL="/conceptos/grafos-no-dirigidos"/>
    </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(Grafos)
