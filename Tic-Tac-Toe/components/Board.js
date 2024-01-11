// components/Board.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }

    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
  const squareColor = board[index] === "X" ? "#3498db" : "#e74c3c";

  return (
    <TouchableOpacity
      style={[styles.square, { backgroundColor: squareColor }]}
      onPress={() => handleClick(index)}
    >
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );
};
  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <View>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  status: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  board: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 200,
    height: 200,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Board;
