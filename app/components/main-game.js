import React, { useState } from 'react';
import { GAME_STATES } from '../page';
import styles from './common.module.css';

const WINNING_SCORE = 20;

const MainGame = ({
  setStage,
  startingPlayer,
  playerList,
  setPlayerList,
  setCurrentWinner,
}) => {
  const [playerScores, setPlayerScores] = useState([
    ...playerList.map(() => 0),
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(startingPlayer);

  const handleEndOfGame = (winnerIndex) => {
    setCurrentWinner(playerList[winnerIndex]);

    // Update Player Scores
    const updatedPlayers = [...playerList];
    updatedPlayers[winnerIndex].wins += 1;
    setPlayerList(updatedPlayers);

    setStage(GAME_STATES.END_OF_GAME);
  };

  const handleScoreClick = ({ playerIndex, subtract = false }) => {
    // Add or subtract from the scores
    const updatedScores = [...playerScores];
    updatedScores[playerIndex] = subtract
      ? (updatedScores[playerIndex] -= 1)
      : (updatedScores[playerIndex] += 1);
    setPlayerScores(updatedScores);

    // Check for a winner
    if (updatedScores.some((score) => score >= WINNING_SCORE)) {
      const winnerIndex = updatedScores.findIndex(
        (score) => score >= WINNING_SCORE
      );
      handleEndOfGame(winnerIndex);
    }
  };

  const getPlayerArea = (playerIndex) => {
    const rotate = playerIndex === 0 ? '90deg' : '-90deg';
    return (
      <div
        className={styles.playerArea}
        style={{
          rotate,
          backgroundColor: playerList[playerIndex].backgroundColor,
        }}
      >
        <div className={styles.playerName}>
          {playerList[playerIndex].playerName}
        </div>
        <div className={styles.playerLoreCounter}>
          {playerScores[playerIndex]}
        </div>
        <div className={styles.playerLoreArea}>
          <div
            className={styles.playerLoreButton}
            onClick={() => handleScoreClick({ playerIndex, subtract: true })}
          >
            -
          </div>
          <div
            className={styles.playerLoreButton}
            onClick={() => handleScoreClick({ playerIndex })}
          >
            +
          </div>
        </div>
      </div>
    );
  };

  const passTurnRotation = currentPlayer === 0 ? '90deg' : '-90deg';
  const handlePassTurn = () => {
    setCurrentPlayer((currentPlayer + 1) % playerList.length);
  };

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Play!</h1>
      <div className={styles.content}>
        {/* Currently hardcoded for 2 players */}
        {getPlayerArea(0)}
        <button
          className={styles.passTheTurn}
          style={{
            rotate: passTurnRotation,
            backgroundColor: playerList[currentPlayer].backgroundColor,
          }}
          onClick={handlePassTurn}
        >
          <div>Current player: {playerList[currentPlayer].playerName}</div>
          <div>Pass the turn</div>
        </button>
        {getPlayerArea(1)}
      </div>
    </React.Fragment>
  );
};

export default MainGame;
