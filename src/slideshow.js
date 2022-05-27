import React from 'react';
import './css/slideshow.css'

function Slide(props){
	return(
		<div className="slide">
			<div className="slide-image-container"><img className="slide-image" src={props.imgURL} alt="pic"/></div>
			<div className="slide-text-container"><p className="slide-text">{props.text}</p></div>
			<div className="slideshow-buttons">
				<button className="slideshow-button" id="prev" onClick={props.prevClick}>«Anterior</button>
				<button className="slideshow-button" id="next" onClick={props.nextClick}>Siguiente»</button>
				<div className="slideshow-pagecount">{props.currentSlide}/{props.maxSlides}</div>
			</div>
		</div>
	);
}

export class Slideshow extends React.Component{
	constructor(props){
		super(props);
		this.state={
			currentActive: 0,
			slideData: props.slideData,
			numSlides: props.numSlides
		};
	}

	nextSlide(){
		this.setState({
			currentActive: Math.min(this.state.currentActive+1,this.state.numSlides-1)
		});
	}

	prevSlide(){
		this.setState({
			currentActive: Math.max(this.state.currentActive-1,0)
		});
	}

	render(){
		return(
			<div className="slideshow">
				<Slide imgURL={this.state.slideData[this.state.currentActive].imgURL} text={this.state.slideData[this.state.currentActive].text} prevClick={() => this.prevSlide()} nextClick={() => this.nextSlide()} currentSlide={this.state.currentActive + 1} maxSlides={this.state.numSlides}/>
			</div>
		);
	}
}