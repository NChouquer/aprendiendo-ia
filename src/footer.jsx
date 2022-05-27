import React from 'react';
import './css/footer.css'

export class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			prevName: props.prevName,
			prevURL: props.prevURL,
			nextName: props.nextName,
			nextURL: props.nextURL
		};
	}
	render(){
		return(
			<div className="footer">
				<div className="footer-prev"><a href={this.state.prevURL}>«{this.state.prevName}</a></div>
				<div className="footer-next"><a href={this.state.nextURL}>{this.state.nextName}»</a></div>
			</div>
		);
	}
}