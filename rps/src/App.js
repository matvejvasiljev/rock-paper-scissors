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
      activeButton: "",

      playerPoints: 0,
      botPoints: 0,
    }
  }

  startGame(img, id) {
    this.setState(function (state) {
      return {
        counter: 3,
        counterClass: "visible",
        gradientClass: "",
        handsClass: "",
        activeButton: id,
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
        if (i === 2) {
          this.setState(function (state) {
            return {
              handsClass: "handsVisible",
            }
          })
        }
        if (i === 3) {
          this.setState(function (state) {
            let playerHand = state.playerHand;
            let botHand = state.botHand
            let playerPoints = state.playerPoints
            let botPoints = state.botPoints
            let gradient = ""
            if (playerHand === "rock" && botHand === "paper") {
              gradient = "gradientRight"
              botPoints += 1
            }
            else if (playerHand === "rock" && botHand === "scissors") {
              gradient = "gradientLeft"
              playerPoints += 1
            }
            else if (playerHand === "paper" && botHand === "scissors") {
              gradient = "gradientRight"
              botPoints += 1
            }
            else if (playerHand === "paper" && botHand === "rock") {
              gradient = "gradientLeft"
              playerPoints += 1
            }
            else if (playerHand === "scissors" && botHand === "rock") {
              gradient = "gradientRight"
              botPoints += 1
            }
            else if (playerHand === "scissors" && botHand === "paper") {
              gradient = "gradientLeft"
              playerPoints += 1
            }
            return {
              counterClass: "",
              gradientClass: gradient,
              activeButton: "",
              playerPoints: playerPoints,
              botPoints: botPoints,
            }
          })
        }
      }, 1000 + 1000 * i);
    }
  }

  restartGame(){
    this.setState(function (state) {

      return{
        playerPoints: 0,
        botPoints: 0,
        gradientClass: "",
        handsClass: "",
      }
    })
  }

  render() {
    return (
      <div>
        <div id="game">
          <h1>ROCK PAPER SCISSORS!</h1>
          <div className="points">
            <p id="playerPoints">{this.state.playerPoints}</p>
            <p id="botPoints">{this.state.botPoints}</p>
          </div>
          <div id="gradient" className={this.state.gradientClass}></div>
          <div id="hands">
            <img id="left" className={this.state.handsClass} onDragStart={(e) => { e.preventDefault() }} src={"images/" + this.state.playerHand + ".svg"} alt="" />
            <img id="right" className={this.state.handsClass} onDragStart={(e) => { e.preventDefault() }} src={"images/" + this.state.botHand + ".svg"} alt="" />
          </div>
          <h2 className={this.state.counterClass}>{this.state.counter}</h2>
          <div id="menu">
            {this.state.images.map((img, id) => (
              <img key={id} className={this.state.activeButton === id ? "activeButton" : this.state.activeButton !== "" ? "lockedButton" : ""} onClick={() => this.startGame(img, id)} onDragStart={(e) => { e.preventDefault() }} src={"images/" + img + ".svg"} alt="" />
            ))}
          </div>
        </div>
        <button id="restartButton" onClick={() => this.restartGame()}>Restart</button>
      </div>
    )
  }
}

export default App;