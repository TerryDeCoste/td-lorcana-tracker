import React from "react";

import { GAME_STATES } from "../page";

import styles from "./common.module.css";

 

const EndOfGame = ({ setStage, currentWinner, playerList, bestOfCount }) => {

  const roundFinished = playerList.some((player) => player.wins >= bestOfCount);

  const handleClick = () => {

    if (roundFinished) {

      playerList.forEach((player) => {

        player.wins = 0;

      });

      setStage(GAME_STATES.SETUP);

    } else {

      setStage(GAME_STATES.COIN_FLIP);

    }

    // @TODO - future state, add statistic collection and display when game finished.

    // setStage(GAME_STATES.STATS);

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

            {roundFinished ? "Start new game" : "Next Game"}

          </button>

        </div>

      </div>

    </React.Fragment>

  );

};

 

export default EndOfGame;

 