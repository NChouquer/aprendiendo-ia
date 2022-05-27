import React from 'react';
import ReactDOM from 'react-dom';
import './sim.css'


export function Tile (props) {
	const tileType = 'tile color-'+props.color
	return(
		<button className={tileType}></button>
    );
}

export class Board extends React.Component {

	constructor(props){
		super(props);
		let boardgrid = [];
		for(let x = 0; x<props.boardWidth;x++){
			boardgrid.push([]);
			for(let y = 0; y<props.boardHeight; y++){

				boardgrid[x].push(<Tile key={x.toString()+','+y.toString()} color="default"/>)
			}
		}
		this.state = {
			boardWidth: props.boardWidth,
			boardHeight: props.boardHeight,
			grid: boardgrid
		};
		
	}

	render(){
		return(
			<div className='board'>
				{this.state.grid}
			</div>
		);
	}
  
}


class SimSidebar extends React.Component{
	constructor(props){
		super(props);
	}

	startButtonClick(){
		console.log("click");
	}

	render(){
		return(
			<div className="sim-sidebar">
				<button className="sim-sidebar-button" onClick={()=> this.startButtonClick()}>Iniciar búsqueda</button>
			</div>
		);
	}
}


export class Sim extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			boardWidth: props.boardWidth,
			boardHeight: props.boardHeight
		}
	}
	randomCoords(){
		return ([Math.floor(Math.random()*(this.state.boardWidth)),Math.floor(Math.random()*(this.state.boardHeight))]);
	}
	runBFS(){}
	runDFS(){}
	restartBoard(){}
	render(){
		return(
			<div className="sim">
				<Board boardWidth={this.state.boardWidth} boardHeight={this.state.boardHeight}/>
				<SimSidebar/>
			</div>
		);
	}
}