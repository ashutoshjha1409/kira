import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class KiraWrapper extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: true
		}

	}

	render(){
		return(
			<div>
				<Drawer open={this.state.open}>
					<MenuItem>Menu Item</MenuItem>
					<MenuItem>Menu Item 2</MenuItem>
				</Drawer>	
						
			</div>
		);
	}
}