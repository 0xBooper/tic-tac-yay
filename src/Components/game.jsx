// Needed imports
import React from "react"

// Import any needed components/helper functions
import Board from "./board.jsx"
import Reset from "./reset.jsx";
import calculateWinner from "../Helpers/calculateWinner.js";
import RandomBool from "../Helpers/randomBool.js";

// The actual game component
export default class Game extends React.Component {

    // Instantiate the class with a empty
    // squares array and xIsNext being true.
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: RandomBool(5), // Make a random value using the RandomBool function
        }
      }

    // Handle the click of the reset button
    handleResetButtonClick = () => {
      // eslint-disable-next-line no-restricted-globals
      const confirmChoice = confirm("Are you really sure you want to reset the board?") // Ask the user if they are sure
      if (!confirmChoice) return // If they aren't sure, return

      // Update state
      this.setState({ 
        xIsNext: RandomBool(7),  // Get a 70%/30% random bool value.
        squares: Array(9).fill(null), // Get a clean array of NULLs
      })
    }

    // Handle any clicks on squares
    handleClick(i) {
        const squaresNew = this.state.squares.slice()   // Create a new copy of the current squares array.

        if (calculateWinner(squaresNew) || squaresNew[i]) { // If there already is a winner, exit early
          return
        }

        squaresNew[i] = this.state.xIsNext ? 'X' : 'O' // Set the new array item to be a X or a O

        this.setState({ // Update state with the new info
          xIsNext: !this.state.xIsNext,
          squares: squaresNew,
        })
    }

    // Render the game
    render() {
      const winner = calculateWinner(this.state.squares) // Get the winner (would return undefined if there is none)
      let status // Declare a empty status

      // If there is a winner, show that. Otherwise, say the next player
      if (winner) {
        alert("Someone won!")
        status = `Winner: ${winner}`
      } else {
        status = `Next player: ${this.state.xIsNext ? "X" : "O"}`
      }

      // Return the JSX stuffs
      return (
        <div className="game">
          <div className="header">
            <h1>Tic Tac Toe</h1>
          </div>
          <div className="game-board">
            <Board squares={this.state.squares} onClick={i => this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <Reset handleClick={this.handleResetButtonClick}/>
          </div>
        </div>
      );
    }
  }