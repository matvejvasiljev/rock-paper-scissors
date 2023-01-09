import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: ["rock", "paper", "scissors"],
    }
  }

  render() {
    return (
      <div>
        <div id="game">
          <h1>ROCK PAPER SCISSORS!</h1>
          <div id="gradient"></div>
          <div id="hands">
            <img id="left" src="images/paper.svg" alt="" />
            <img id="left" src="images/rock.svg" alt="" />
          </div>
          <h2>3</h2>
          <div id="menu">
            {this.state.images.map((img, id) => (
              <img onDragStart={() => { return false }} src={"images/" + img + ".svg"} alt="" />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;

// Закончить все стили
// По клику на кнопки в #menu в консоль выводить название символа