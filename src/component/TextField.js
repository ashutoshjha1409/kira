import React from 'react';

export default class KiraWrapper extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: true
		}

	}

	componentWillMount(){
		console.log(this.props)
	}

	render(){
		return(
			<div>
				Hello world
						
			</div>
		);
	}
}