// Needed imports
import React from "react"

// Import helper functions and the square component
import Square from "./square.jsx"

// Board component
export default class Board extends React.Component {

    // Render squares based on the squares state array
    renderSquare(i) {
      return <Square value={this.props.squares[i]} onClick={ () => this.props.onClick(i) } />;
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }