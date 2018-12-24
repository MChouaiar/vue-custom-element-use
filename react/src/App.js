import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      text: "Message from React"
    };
    this.handleChange = this.handleChange.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  componentDidMount() {
    //this.ngElement = this.refs.elem;
    // we need to bind the event listener this way, since we can't get the custom event past react's synthetic event system
    // more on this at: https://github.com/facebook/react/issues/7901
  }

  handleChange(event) {
      this.setState({text: event.target.value});
  }

  increaseCounter() {
    this.setState({count: this.state.count + 1})
  }

    decreaseCounter() {
        this.setState({count: this.state.count - 1})
    }

  render() {
    return (
      <div className="App">
          <div className="react">
            <div style={{textAlign: 'center'}}>
              <img width="300" alt="React Logo" src="./img/download.png"/>
            </div>
            <div className="vue">
              <my-custom-element number={this.state.count} message={this.state.text} ref="elem"></my-custom-element>
            </div>

              <input value={this.state.text} onChange={this.handleChange} style={{marginTop: 15}}/>

              <h3>{this.state.count}</h3>
              <h3>{this.state.message}</h3>

              <Button variant="contained" color="primary" style={{marginRight: 15}} onClick={this.increaseCounter}>Increase the counter</Button>
              <Button variant="contained" color="secondary" onClick={this.decreaseCounter}>Decrease the counter</Button>
          </div>
      </div>
    );
  }
}

export default App;
