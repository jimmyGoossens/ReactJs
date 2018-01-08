import React from 'react';
export default class List extends React.Component{

showTodos(){

	return (this.props.todos.map((element, index)=>{

		return( <div className="todo" key = {index}> {element.title} </div>)
	})
);
	}
	

render(){


	return(

		<div className='liste'>
	
		  <h2>{this.showTodos()}</h2>
			
		</div>

		);
}



}