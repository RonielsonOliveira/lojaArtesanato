import React, {Component} from "react";


//tarefas

import './Form'
import './Main.css'
import Form from "./Form";
import Tarefas from "./Tarefas";
import Header from "./Header";
import { Container } from "../styles/GlobalStyles";
export default class Main extends Component{
  state = {
      novaTarefa: '',
      tarefas: [],
      index: -1
    };

    componentDidMount(){
      const tarefas = JSON.parse(localStorage.getItem('tarefas'));
      if (!tarefas) return;
      this.setState({tarefas});
    }
    componentDidUpdate(prevProps, prevState){
      const {tarefas} = this.state;

      if(tarefas === prevState.tarefas) return;

      localStorage.setItem('tarefas',JSON.stringify(tarefas))
    }

  handleSubmit = (e) =>{
    e.preventDefault();
    const {tarefas, index} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    if(!novaTarefa) return;
    if(tarefas.indexOf(novaTarefa) !== -1) {
      alert('Tarefa ja existe')
      return;
    }

    const novaTarefas = [...tarefas];

    if(index == -1) {
      this.setState({
      tarefas: [...novaTarefas, novaTarefa],
      novaTarefa: ''
    })
    } else {
      novaTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novaTarefas],
        index: -1,
        novaTarefa: '',
      })
    };



  }

  handleChange =(e) => {
    this.setState({
      novaTarefa: e.target.value,

    });
  }
  handleEdit = (e, index) => {
    const {tarefas} = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],

    });

  }

  handleDelete = (e, index) => {
    const {tarefas } = this.state;
    const novaTarefas = [...tarefas];
    novaTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novaTarefas]
    })
  }
  render(){
    const {novaTarefa, tarefas} = this.state;
    return(
      <div className="main">
        <Container>
        <Header/>
        <h1>Lista de tarefas</h1>
        <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
</Container>

      </div>
    )
  }
}
