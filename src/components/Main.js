import React, {Component} from 'react';
// import Header from './Header';
// import Content from './Content';
import {ANIMALS} from '../actions/constants'

class Main extends Component {
    state = {
      response:""
    }
    componentDidMount() {
      this.props.fetchData(ANIMALS)
    }
    render() {
      let { animals } = this.props.app
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">PANDA WATCH</h1>
          </header>
          <ul className="App-intro">
            {animals.list.length > 0 ? animals.list.map((animal) => {
              return(
                <li>
                  <img src={animal.image}></img>
                  <p>{animal.name}- {animal.color} {animal.species}</p>
                </li>
              )
            })
            : <li>No animals loaded</li>
            }
          </ul>
          
        </div>
      );
    }
  }
export default Main;