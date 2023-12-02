import React from 'react';
import { GAME_STATES } from '../page';
import styles from './common.module.css';

const Setup = ({
  setStage,
  setPlayerList,
  defaultPlayerList,
  bestOfCount,
  setBestOfCount,
}) => {
  const handleClick = () => {
    const updatedPlayerList = [...defaultPlayerList].slice(0, 2);
    setPlayerList(updatedPlayerList);
    setStage(GAME_STATES.COIN_FLIP);
  };
  return (
    <React.Fragment>
      <h1 className={styles.heading}>Game Setup</h1>
      <div className={styles.content}>
        <button onClick={handleClick} className={styles.continueButton}>
          Start Game
        </button>
      </div>
    </React.Fragment>
  );
};

export default Setup;
