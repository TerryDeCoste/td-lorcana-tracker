'use client';
import React, { useState } from 'react';
import Setup from './components/setup';
import CoinFlip from './components/coin-flip';
import FirstPlayerSelection from './components/first-player-selection';
import MainGame from './components/main-game';
import EndOfGame from './components/end-of-game';

export const GAME_STATES = Object.freeze({
  SETUP: 'SETUP',
  COIN_FLIP: 'COIN_FLIP',
  FIRST_PLAYER_SELECTION: 'FIRST_PLAYER_SELECTION',
  MAIN_GAME_TRACKING: 'MAIN_GAME_TRACKING',
  END_OF_GAME: 'END_OF_GAME',
  STATS: 'STATS',
});

const defaultPlayerList = [
  {
    playerName: 'RED',
    backgroundColor: '#f5c4c4',
    wins: 0,
  },
  {
    playerName: 'BLUE',
    backgroundColor: '#c4caf5',
    wins: 0,
  },
];

export default function Home() {
  const [stage, setStage] = useState(GAME_STATES.SETUP);
  const [bestOfCount, setBestOfCount] = useState(1);
  const [decidingPlayer, setDecidingPlayer] = useState();
  const [startingPlayer, setStartingPlayer] = useState();
  const [currentWinner, setCurrentWinner] = useState();
  const [playerList, setPlayerList] = useState([]);

  switch (stage) {
    case GAME_STATES.COIN_FLIP:
      return (
        <CoinFlip
          setStage={setStage}
          setDecidingPlayer={setDecidingPlayer}
          playerList={playerList}
        />
      );
    case GAME_STATES.FIRST_PLAYER_SELECTION:
      return (
        <FirstPlayerSelection
          setStage={setStage}
          decidingPlayer={decidingPlayer}
          setStartingPlayer={setStartingPlayer}
          playerList={playerList}
        />
      );
    case GAME_STATES.MAIN_GAME_TRACKING:
      return (
        <MainGame
          setStage={setStage}
          startingPlayer={startingPlayer}
          playerList={playerList}
          setPlayerList={setPlayerList}
          setCurrentWinner={setCurrentWinner}
        />
      );
    case GAME_STATES.END_OF_GAME:
      return (
        <EndOfGame
          setStage={setStage}
          currentWinner={currentWinner}
          playerList={playerList}
        />
      );
    case GAME_STATES.STATS:
    case GAME_STATES.SETUP:
    default:
      return (
        <Setup
          setStage={setStage}
          setPlayerList={setPlayerList}
          defaultPlayerList={defaultPlayerList}
          bestOfCount={bestOfCount}
          setBestOfCount={setBestOfCount}
        />
      );
  }
}
