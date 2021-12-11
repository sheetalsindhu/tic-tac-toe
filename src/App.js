import "./App.css";
import React, { useEffect, useState } from "react";
import SquareBoard from "./componets/Square_borad";

const beginingStateOfGame = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [gameState, setGameState] = useState(beginingStateOfGame);
  const [isXChance, updateIsXChance] = useState(false);

  const onClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance);
    setGameState(strings);
  };

  const restart = () => {
    setGameState(beginingStateOfGame);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      restart();
      alert(`${winner} won the Game !`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      gameState[0],
      gameState[1],
      gameState[2]
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  return (
    <div className="app-header">
      <h1>baseurl: {baseUrl}</h1>
      <p className="heading-text">Tic Tac Toe</p>
      <div className="board">
        <div className="row jc-center">
          <SquareBoard
            className="b-bottom-right"
            onClick={() => onClicked(0)}
            state={gameState[0]}
          />
          <SquareBoard
            className="b-bottom-right"
            onClick={() => onClicked(1)}
            state={gameState[1]}
          />
          <SquareBoard
            className="b-bottom"
            onClick={() => onClicked(2)}
            state={gameState[2]}
          />
        </div>
        <div className="row jc-center">
          <SquareBoard
            className="b-bottom-right"
            onClick={() => onClicked(3)}
            state={gameState[3]}
          />
          <SquareBoard
            className="b-bottom-right"
            onClick={() => onClicked(4)}
            state={gameState[4]}
          />
          <SquareBoard
            className="b-bottom"
            onClick={() => onClicked(5)}
            state={gameState[5]}
          />
        </div>
        <div className="row jc-center">
          <SquareBoard
            className="b-right"
            onClick={() => onClicked(6)}
            state={gameState[6]}
          />
          <SquareBoard
            className="b-right"
            onClick={() => onClicked(7)}
            state={gameState[7]}
          />
          <SquareBoard onClick={() => onClicked(8)} state={gameState[8]} />
        </div>
      </div>
      <button className="clear-button" onClick={restart}>
        Restart
      </button>
    </div>
  );
}

export default App;
