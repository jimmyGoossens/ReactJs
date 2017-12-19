import React from 'react';


export default class Todo extends React.Component {
AddTodo(event){
    event.preventDefault();
    const txt = this.ToDoTitle.value;
    this.props.onNewTodo({
        title: txt,
        done : false,
        createdAt: new Date()
    })
}
	render(){

		return(

			 <form>
		      	<input type="text" ref={(input) => this.ToDoTitle = input} />
		     	<button onClick={this.AddTodo.bind(this)} >Ajouter</button>
  			</form>				

			);


	}

}