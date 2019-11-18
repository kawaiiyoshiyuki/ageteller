import React, { Component} from "react";
import { Button, Form, FormControl } from 'react-bootstrap';
import './App.css';
import AgeStats from "./AgeStats";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDate: '',
      birthDay: '1990-01-01',
      showStats: false,
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({
      birthDay: this.state.newDate,
      showStats: true
    });
  }

  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl
            type="date"
            onChange={ event => this.setState({ newDate: event.target.value })}
          >
          </FormControl>
            {' '}
            <Button className="btn" onClick={() => this.changeBirthday() }>
              Submit
            </Button>
          {this.state.showStats ?
            <div className="fade age-stats">
              <AgeStats date={this.state.birthDay}/>
            </div>
            : <div></div>
          }
        </Form>
      </div>
    )
  }
}

export default App;