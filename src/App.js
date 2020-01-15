import React, { Component } from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export class App extends Component {
  state = {
    monsters: [],
    searchField: ""
  }

  async componentDidMount() {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    var users = await response.json();
    this.setState({ monsters: users });
    // console.log("TCL: App -> componentDidMount -> users", users)
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { monsters, searchField } = this.state;

    const constFilteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rodolox</h1>
        <SearchBox placeholder="Search Monsters"
          handleChange={this.handleChange} />
        <CardList monsters={constFilteredMonster} />
      </div>
    )
  }
}

export default App
