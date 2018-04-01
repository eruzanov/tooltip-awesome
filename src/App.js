import React, {Component} from 'react';
import './App.css';
import ToolTip from './ToolTip';

const data = (new Array(10)).fill(true);

class App extends Component {
  componentDidMount() {
    this.setState({rightEdge: this.container.getBoundingClientRect().width});
  }

  onMouseEnter() {
    this.setState({show: true});
  }

  onMouseMove(e) {
    this.setState({y: e.clientY, x: e.clientX});
  }

  onMouseOut() {
    this.setState({show: false});
  }

  render() {
    return (
      <div ref={el => this.container = el}>
        <div className="App">
          {data.map((item, i) =>
            <div
              key={i}
              className="bar"
              onMouseEnter={() => this.onMouseEnter()}
              onMouseMove={e => this.onMouseMove(e)}
              onMouseOut={() => this.onMouseOut()}
            />
          )}
        </div>
        <ToolTip {...this.state}/>
      </div>
    );
  }
}

export default App;
