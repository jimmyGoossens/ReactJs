import React from 'react';

export default class TodoList extends React.Component{

render(){


	return(

		<div className='liste'>
	
			{this.props.todo}
			
		</div>

		);
}



}