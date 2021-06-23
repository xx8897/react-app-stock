import React ,{ Component } from 'react';
import '../../App.css';
import Footer from '../Footer';

class App extends Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI() {
    fetch("http://localhost:9000/index?pageNo=1")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
    }
    componentWillMount() {
      this.callAPI();
    }

    render(){
      return(
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">welcome to React</h1>
          </header>
          <p className="App-intro">{this.state.apiResponse}</p>
          <footer></footer>
        </div>
        
      )
    }


}

export default App;