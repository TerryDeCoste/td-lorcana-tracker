import React, { useState } from "react";

import { GAME_STATES } from "../page";

import styles from "./common.module.css";

 

const AVAILABLE_PLAYERS = [2, 3, 4];

const AVAILALBE_BEST_OF = [1, 2, 3, 4];

 

const Setup = ({

  setStage,

  setPlayerList,

  defaultPlayerList,

  bestOfCount,

  setBestOfCount,

}) => {

  const [playerCount, setPlayerCount] = useState(2);

 

  const handleClick = () => {

    const updatedPlayerList = [...defaultPlayerList].slice(0, playerCount);

    setPlayerList(updatedPlayerList);

    setStage(GAME_STATES.COIN_FLIP);

  };

  return (

    <React.Fragment>

      <h1 className={styles.heading}>Game Setup</h1>

      <div className={styles.content}>

        <h2 className={styles.introductionRow}>Terry&apos;s Lorcana Tracker</h2>

        <div className={styles.setupRow}>

          <div className={styles.setupRowArea}>

            <div className={styles.setupTitle}>Players:</div>

            <div className={styles.setupButtons}>

              {AVAILABLE_PLAYERS.map((playerNumber) => (

                <button

                  key={`players-${playerNumber}`}

                  onClick={() => setPlayerCount(playerNumber)}

                  className={

                    playerCount === playerNumber ? styles.setupButtonActive : ""

                  }

                >

                  {playerNumber}

                </button>

              ))}

            </div>

          </div>

          <button

            onClick={handleClick}

            className={styles.continueButton}

            style={{ height: "5rem", width: "10rem" }}

          >

            Start Game

          </button>

          <div className={styles.setupRowArea}>

            <div className={styles.setupTitle}>First to # wins:</div>

            <div className={styles.setupButtons}>

              {AVAILALBE_BEST_OF.map((bestOf) => (

                <button

                  key={`bestOf-${bestOf}`}

                  onClick={() => setBestOfCount(bestOf)}

                  className={

                    bestOfCount === bestOf ? styles.setupButtonActive : ""

                  }

                >

                  {bestOf}

                </button>

              ))}

            </div>

          </div>

        </div>

        <div className={styles.creditSection}>

          <p>

            This web app was created to help track scores for a game of the

            Disney Lorcana TCG.

          </p>

          <p>

            You can learn more about the TCG at the official Ravensberger Site

            here.

          </p>

          <p>
            You can learn more about Terry, the creator of this site at{" "}
            <a href="https://terrydecoste-personalprofile.netlify.app/">
              his profile page here.
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );

};

 

export default Setup;

 