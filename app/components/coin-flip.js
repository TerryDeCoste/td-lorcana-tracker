import React, { useEffect, useState } from 'react';
import { GAME_STATES } from '../page';
import styles from './common.module.css';

const ROLL_ANIMATION_TIMES = 12;
const START_TIMEOUT_TIME = 50;
const TIMEOUT_INCREMENT = 10;
const MAX_TIMEOUT_TIME = 700;
const DICE_MAX = 20;

const waitSleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getRandomNumber = (max) => Math.ceil(Math.random() * max);

const CoinFlip = ({ setStage, setDecidingPlayer, playerList }) => {
  const [diceCounts, setDiceCounts] = useState(playerList.map(() => 0));
  const [rollCount, setRollCount] = useState(0);
  const [timeoutTime, setTimeoutTime] = useState(START_TIMEOUT_TIME);
  const [winner, setWinner] = useState(false);

  const finishCoinFlip = async (winningIndex) => {
    await waitSleep(timeoutTime * 2);
    setDecidingPlayer(playerList[winningIndex]);
    setStage(GAME_STATES.FIRST_PLAYER_SELECTION);
  };

  const runCoinFlip = async () => {
    await waitSleep(timeoutTime);
    const newDiceCounts = diceCounts.map(() => getRandomNumber(DICE_MAX));

    setDiceCounts(newDiceCounts);
    setTimeoutTime((current) =>
      current + rollCount * TIMEOUT_INCREMENT < MAX_TIMEOUT_TIME
        ? current + rollCount * TIMEOUT_INCREMENT
        : MAX_TIMEOUT_TIME
    );
    setRollCount((current) => current + 1);
  };

  useEffect(() => {
    const currentMaxCount = Math.max(...diceCounts);
    const currentMaxArray = diceCounts.filter(
      (item) => item === currentMaxCount
    );
    if (rollCount >= ROLL_ANIMATION_TIMES && currentMaxArray.length === 1) {
      const winnerIndex = diceCounts.findIndex(
        (item) => item === currentMaxCount
      );
      setWinner(winnerIndex);
      finishCoinFlip(winnerIndex);
    } else {
      runCoinFlip();
    }
  }, [rollCount]);

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Deciding Choosing Player...</h1>
      <div className={styles.content}>
        {rollCount <= 0 && (
          <button onClick={runCoinFlip} className={styles.continueButton}>
            Run coin flip
          </button>
        )}
        {rollCount > 0 &&
          playerList.map((player, index) => (
            <div
              key={index}
              className={styles.diceBox}
              style={{
                backgroundColor: player.backgroundColor,
                transform: winner === index ? 'scale(1.1)' : '',
              }}
            >
              {diceCounts[index]}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default CoinFlip;
