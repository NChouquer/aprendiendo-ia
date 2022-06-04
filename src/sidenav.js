import React from 'react';
import './css/sidenav.css'


export class Sidenav extends React.Component{
	render(){
		return(
			<div className="sidenav">
			  <h3 className="sidenav-title">Contenidos</h3>
			  <ul className="sidenav-ul">
			  <li><a href="/" className="sidenav-item">Conceptos Básicos</a>
			    <ul className="sidenav-ul">
			    <li><a href="/conceptos/inteligencia-artificial" className="sidenav-subitem">Inteligencia Artificial</a></li>
			    <li><a href="/conceptos/algoritmos" className="sidenav-subitem">Algoritmos</a></li>
			    <li><a href="/conceptos/grafos" className="sidenav-subitem">Grafos</a>
			    	<ul className="sidenav-ul">
			    		<li><a href="/conceptos/grafos-no-dirigidos" className="sidenav-subitem">• Grafos no dirigidos</a></li>
			    		<li><a href="/conceptos/grafos-dirigidos" className="sidenav-subitem">• Grafos dirigidos</a></li>
			    		<li><a href="/conceptos/arboles" className="sidenav-subitem">• Árboles</a></li>
			    	</ul>
			    </li>
			    <li><a href="/conceptos/heuristicas" className="sidenav-subitem">Heurísticas</a></li>
			    </ul>
			  </li>
			  <hr className="solid"/>
			  <li><a href="/busqueda-no-informada" className="sidenav-item">Búsqueda no Informada</a>
			    <ul className="sidenav-ul">
			    <li><a href="/busqueda-en-anchura" className="sidenav-subitem">Búsqueda en Anchura</a>
			    	<ul className="sidenav-ul">
			    	<li><a href="/busqueda-en-anchura-costo-uniforme" className="sidenav-subitem">• Búsqueda en anchura con costo uniforme</a></li>
			    	</ul>
			    </li>
			    <li><a href="/busqueda-en-profundidad" className="sidenav-subitem">Búsqueda en Profundidad</a>
			    	<ul className="sidenav-ul">
			    		<li><a href="/busqueda-en-profundidad-limitada" className="sidenav-subitem">• Búsqueda en Profundidad Limitada</a></li>
			    		<li><a href="/busqueda-en-profundidad-limitada-iterativa" className="sidenav-subitem">• Búsqueda en Profundidad Limitada Iterativa</a></li>
			    	</ul>
			    </li>
			    <li><a href="/busqueda-bidireccional" className="sidenav-subitem">Búsqueda Bidireccional</a></li>
			    </ul>
			  </li>
			  <hr className="solid"/>
			  <li>
			  <a href="/busqueda-informada" className="sidenav-item">Búsqueda Informada</a>
			    <ul className="sidenav-ul">
			    <li><a href="/busqueda-greedy" className="sidenav-subitem">Búsqueda Greedy</a></li>
			    <li><a href="/busqueda-a" className="sidenav-subitem">Búsqueda A*</a></li>
			    </ul>
			  </li>
			</ul>
			</div>
		);
	}
	
}