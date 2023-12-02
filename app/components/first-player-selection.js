import React from 'react';
import { GAME_STATES } from '../page';
import styles from './common.module.css';

const FirstPlayerSelection = ({
  setStage,
  decidingPlayer,
  setStartingPlayer,
  playerList,
}) => {
  const handleClick = (playerIndex) => {
    setStartingPlayer(playerIndex);
    setStage(GAME_STATES.MAIN_GAME_TRACKING);
  };

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Starting Player Decision</h1>
      <div className={styles.content}>
        <div className={styles.centerBox}>
          <h2 className={styles.subHeading}>
            Deciding Player: {decidingPlayer.playerName}
          </h2>
          <div className={styles.playerButtonContainer}>
            {playerList.map((player, index) => (
              <button
                key={player.playerName}
                onClick={() => handleClick(index)}
                className={styles.continueButton}
                style={{ backgroundColor: player.backgroundColor }}
              >
                <div>Choose</div>
                <div style={{ fontSize: '2rem' }}>{player.playerName}</div>
                <div>to go first</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FirstPlayerSelection;
