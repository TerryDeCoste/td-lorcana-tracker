import React from 'react';
import { GAME_STATES } from '../page';
import styles from './common.module.css';

const EndOfGame = ({ setStage, currentWinner, playerList }) => {
  const handleClick = () => {
    setStage(GAME_STATES.STATS);
  };

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Winner!</h1>
      <div className={styles.content}>
        <div
          className={styles.centerBox}
          style={{ backgroundColor: currentWinner.backgroundColor }}
        >
          <h2 className={styles.winnerText}>{currentWinner.playerName}</h2>
          <button onClick={handleClick} className={styles.startNewGameButton}>
            Start new game
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EndOfGame;
