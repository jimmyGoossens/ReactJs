import React from 'react';


export default class Todo extends React.Component {
  AddTodo(event){

    event.preventDefault();
    var txt = this.TodoTitle.value;
    this.props.onNewTodo({
        title: txt,
        createdAt: new Date()
    })
    console.log(this.TodoTitle.value);
  }

	render(){

		return(

			 <form>
		      	<input type="text" ref={(input) => this.TodoTitle = input} />
		     	<button onClick= { e => this.AddTodo(e)} >Ajouter</button>
  			</form>				

			);


	}

}