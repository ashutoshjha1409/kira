import React from 'react';
import TextField from '../component/TextField';

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
			<div >
				Hello world
						
			</div>
		);
	}
}