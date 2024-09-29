import React, { useState, useEffect } from "react";
import "./Game.css"; // Optional, for styling

const Game = () => {
  const [snake, setSnake] = useState([[0, 0]]); // Snake's body as an array of [x, y] positions
  const [direction, setDirection] = useState([1, 0]); // [dx, dy] movement
  const [food, setFood] = useState([5, 5]); // Random initial food position
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Handle key press for direction control
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection([0, -1]);
          break;
        case "ArrowDown":
          setDirection([0, 1]);
          break;
        case "ArrowLeft":
          setDirection([-1, 0]);
          break;
        case "ArrowRight":
          setDirection([1, 0]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Game loop: Moves the snake at regular intervals
  useEffect(() => {
    if (gameOver) return;

    const intervalId = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(intervalId);
  }, [snake, direction, gameOver]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];

    // Check if snake eats the food
    if (newHead[0] === food[0] && newHead[1] === food[1]) {
      setFood([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]); // New food position
      setScore(score + 1); // Increment score
    } else {
      newSnake.pop(); // Remove tail if no food eaten
    }

    newSnake.unshift(newHead);

    // Check if snake hits the wall or itself
    if (newHead[0] < 0 || newHead[1] < 0 || newHead[0] >= 10 || newHead[1] >= 10 || isCollision(newSnake)) {
      setGameOver(true);
    } else {
      setSnake(newSnake);
    }
  };

  const isCollision = (snake) => {
    const [head, ...body] = snake;
    return body.some(([x, y]) => x === head[0] && y === head[1]);
  };

  return (
    <div>
      <h1>Snake Game</h1>
      <div className="board">
        {Array.from({ length: 10 }).map((_, row) => (
          <div key={row} className="row">
            {Array.from({ length: 10 }).map((_, col) => {
              const isSnake = snake.some(([x, y]) => x === col && y === row);
              const isFood = food[0] === col && food[1] === row;
              return (
                <div
                  key={col}
                  className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <p>Score: {score}</p>
      {gameOver && <p>Game Over! Refresh to restart.</p>}
    </div>
  );
};

export default Game;
