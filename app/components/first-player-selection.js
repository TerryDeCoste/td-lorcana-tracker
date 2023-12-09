import React from "react";

import { GAME_STATES } from "../page";

import styles from "./common.module.css";

import PlayLayout from "./hoc/play-layout";

 

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

 

  const playerArea = (playerIndex) => (

    <button

      key={playerList[playerIndex].playerName}

      onClick={() => handleClick(playerIndex)}

      className={styles.playerButton}

      style={{

        backgroundColor: playerList[playerIndex].backgroundColor,

      }}

    >

      <div style={{ fontSize: "2rem" }}>

        {playerList[playerIndex].playerName}

      </div>

    </button>

  );

 

  const firstSideDecide =

    decidingPlayer.playerName === playerList[0].playerName ||

    (decidingPlayer.playerName === playerList[1].playerName &&

      playerList.length > 2);

  const playerAreaList = [

    playerArea(0),

    playerArea(1),

    ...(playerList.length > 2 ? [playerArea(2)] : []),

    ...(playerList.length > 3 ? [playerArea(3)] : []),

  ];

  return (

    <React.Fragment>

      <h1 className={styles.heading}>Starting Player Decision</h1>

      <div className={styles.content}>

        <PlayLayout

          playerAreaList={playerAreaList}

          playerList={playerList}

          centerArea={

            <div

              style={{

                rotate: firstSideDecide ? "180deg" : "",

              }}

            >

              <div style={{ fontSize: "2rem" }}>

                {decidingPlayer.playerName}

              </div>

              <div>Choose who goes first</div>

            </div>

          }

          centerStyle={{

            backgroundColor: decidingPlayer.backgroundColor,

          }}

        />

      </div>

    </React.Fragment>

  );

};

 

export default FirstPlayerSelection;

 