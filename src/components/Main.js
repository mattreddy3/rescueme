import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';

class Main extends Component {
    state = {
      response:""
    }
    componentDidMount() {
      this.callApi()
        .then(res=>this.setState({response:res.express}))
        .catch(err=>console.log(err));
    }
    callApi = async() => {
      const response = await fetch(`/api/hello`);
      try{
        const body = await response.json();
        if(response.status !== 200) throw Error(body.message);
    
        return body;
      }catch(e){
        console.log(response);
        return {express: "Couldn't reach the server"}
      }
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Bienvenidos a RescueMe</h1>
          </header>
          <p className="App-intro">
            {this.state.response}
          </p>
          
        </div>
      );
    }
  }
export default Main;