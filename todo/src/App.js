import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcom.js';
import List from './component/List.js';
import Todo from './component/TodoForm.js';
class App extends Component {

constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
}

onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
    console.log(newTodoList);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
        <Welcome/>
        <Todo onNewTodo={this.onNewTodo.bind(this)}/>
        <List todos= {this.state.todos}/>


      </div>
    );
  }
}







export default App; 
      /*  <Todo onNewTodo={this.onNewTodo.bind(this)} />
        <List todos={this.state.todos} />
      */
      /*  constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
  }

  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
    console.log(newTodoList);
    console.log(this.state);

  }

  showTodos(todos){
    
      for (var i = 0; i todos.length; i++) {
        return(


        <div className="todo">todos[i]</div>);
      }

    
  }

  AddTodo(event){
    event.preventDefault();
    const txt = this.ToDoTitle.value;
    this.props.onNewTodo({
        title: txt,
        done : false,
        createdAt: new Date()
    })
}*/