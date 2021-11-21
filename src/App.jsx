import React from "react";
import SmallSquare from "./Components/Start/SmallSquare";
import digitSquares from "./Data/digitSquares";



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      border: 'darkgrey',
    }
  }

  handleClick = () => {
    this.setState(
      { border: '#' + Math.floor(Math.random() * 16777215).toString(16) }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="big-blue" style={{ borderColor: this.state.border }}>
          <div className="big-blue__button">
            <button className="button" onClick={this.handleClick}>I am Nice</button>
          </div>
          <SmallSquare color={'red'} number={5} />
          <SmallSquare color={'orange'} number={7} />
          <SmallSquare color={'lime'} number={8} />
          <SmallSquare color={'brown'} number={19} />
        </div>
        <div className="big-blue">
          {
            digitSquares.map((square, index) =>
              <SmallSquare color={square.color} number={square.number} key={index}></SmallSquare>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;