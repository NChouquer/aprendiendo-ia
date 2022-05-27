import React from 'react';
import './css/slideshow2.scss'

const data = [{
	id: 0,
	header: 'Gluten-free Bicycle',
	body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
	colour: '#242846',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc1.jpg'
}, {
	id: 1,
	header: 'Post-ironic Disrupt',
	body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
	colour: '#ba9077',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc2.jpg'
}, {
	id: 2,
	header: 'Lumber-Sexual Roof Party ',
	body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
	colour: '#1ABC9C',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
}, {
	id: 3,
	header: 'Vegan hoodie trust fund',
	body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
	colour: '#C0392B',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg'
}, {
	id: 4,
	header: 'cliche craft beer',
	body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
	colour: '#513B56',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg'
}];

export class Slideshow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			wrapperStyle: {
				backgroundImage: `url('${data[0].img}')`
			},
			panelStyle: {
				background: data[0].colour
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
			wrapperStyle: {
				backgroundImage: `url('${data[id].img}')`
			},
			panelStyle: {
				backgroundColor: data[id].colour
			}
		});
	}
	_buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	}
	render() {
		return (
			<div className="slideshow">
			<section className="wrapper" style={this.state.wrapperStyle}>
				<Selectors 
					data={data}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}
				/>
				<Panel 
					data={data[this.state.activeID]}
					panelStyle={this.state.panelStyle}
					buttonStyle={this.state.buttonStyle}
					_buttonColour={this._buttonColour.bind(this)}
				/>
			</section>
			</div>
		);
	}
}
class Panel extends React.Component {
	render() {
		return (
			<aside className="panel" style={this.props.panelStyle}>
				<h2 className="panel-header">{data.header}</h2>
				<p className="panel-info">{data.body}</p>
				<button className="panel-button" 
					style={this.props.buttonStyle}
					onMouseEnter={this.props._buttonColour}
					onMouseLeave={this.props._buttonColour}>
					Read More
				</button>
			</aside>
		);
	}
}
class Selectors extends React.Component {
	_handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		return (
			<div className="selectors">
				{data.map((item) => 
					<Selector 
						key={item.id}
						id={item.id}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</div>
		);
	}
}
class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<div className={componentClass} onClick={this.props._handleClick.bind(this)}></div>
		);
	}
}



