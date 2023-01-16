import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: ["rock", "paper", "scissors"],
      counter: 3,
      counterClass: "",
      handsClass: "",
      gradientClass: "",
      playerHand: "paper",
      botHand: "rock",
    }
  }

  startGame(img, id) {
    this.setState(function (state) {
      return {
        counter: 3,
        counterClass: "visible",
        gradientClass: "",
        handsClass: "",
      }
    })
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        this.setState(function (state) {
          return {
            counter: state.counter - 1
          }
        })
        if (i === 0) {
          this.setState(function (state) {
            return {
              playerHand: img,
              botHand: state.images[Math.floor(Math.random() * 3)],
            }
          })
        }
        if (i === 1) {
          this.setState(function (state) {
            let playerHand = state.playerHand;
            let botHand = state.botHand
            let gradient
            if (playerHand === "rock" && botHand === "paper") {
              gradient = "gradientRight"
            }
            else if (playerHand === "rock" && botHand === "scissors") {
              gradient = "gradientLeft"
            }
          })
        }
        if (i === 2) {
          this.setState(function (state) {
            return {
              handsClass: "handsVisible",
            }
          })
        }
        if (i === 3) {
          this.setState(function (state) {
            return {
              counterClass: "",
              gradientClass: "gradientVisible",
            }
          })
        }
      }, 1000 + 1000 * i);
    }
  }

  render() {
    return (
      <div>
        <div id="game">
          <h1>ROCK PAPER SCISSORS!</h1>
          <div id="gradient" className={this.state.gradientClass}></div>
          <div id="hands">
            <img id="left" className={this.state.handsClass} onDragStart={(e) => { e.preventDefault() }} src={"images/" + this.state.playerHand + ".svg"} alt="" />
            <img id="right" className={this.state.handsClass} onDragStart={(e) => { e.preventDefault() }} src={"images/" + this.state.botHand + ".svg"} alt="" />
          </div>
          <h2 className={this.state.counterClass}>{this.state.counter}</h2>
          <div id="menu">
            {this.state.images.map((img, id) => (
              <img key={id} onClick={() => this.startGame(img, id)} onDragStart={(e) => { e.preventDefault() }} src={"images/" + img + ".svg"} alt="" />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;

// доделать появление градиента