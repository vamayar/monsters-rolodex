import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component{
  
  constructor(){
    super();
    this.state = {
        monsters: [
        
        ],
        searchField:''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( users=> this.setState({monsters :users}))
  }

  render(){
    
    const {monsters, searchField} = this.state; 
    const filteredMonster = monsters.filter( monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox 
            placeholder= 'search monsters' 
            handleChange={
              e=> this.setState({searchField : e.target.value})}/>
      <CardList monsters = {filteredMonster}/>         
    </div>
    );
  }
}

export default App;
