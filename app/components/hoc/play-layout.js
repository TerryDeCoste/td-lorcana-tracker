import React, { useState, useRef, useEffect } from "react";
import styles from "../common.module.css";
 
const PlayLayout = ({ playerAreaList, centerArea, centerStyle }) => {
  const [halfWidth, setHalfWidth] = useState(0);
  const [halfHeight, setHalfHeight] = useState(0);
  const playerZeroSpace = useRef();
 
  useEffect(() => {
    setHalfHeight(playerZeroSpace?.current?.clientWidth || 0);
    setHalfWidth(playerZeroSpace?.current?.clientHeight || 0);
  }, [
    playerZeroSpace?.current?.clientWidth,
    playerZeroSpace?.current?.clientHeight,
  ]);
 
  return (
    <div className={styles.playLayout}>
      <div
        className={
          playerAreaList.length > 2
            ? styles.playPlayerRowSplit
            : styles.playPlayerRow
        }
      >
        {playerAreaList.length <= 2 ? (
          <div style={{ rotate: "180deg", height: "100%", width: "100%" }}>
            {playerAreaList[0]}
          </div>
        ) : (
          <React.Fragment>
            <div
              ref={playerZeroSpace}
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <div
                style={{
                  width: `${halfWidth}px`,
                  height: `${halfHeight}px`,
                  transformOrigin: "top left",
                  transform: "rotate(90deg) translate(0, -100%)",
                }}
              >
                {playerAreaList[0]}
              </div>
            </div>
 
            <div
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <div
                style={{
                  width: `${halfWidth}px`,
                  height: `${halfHeight}px`,
                  transformOrigin: "top left",
                  transform: "rotate(-90deg) translate(-100%, 0%)",
                }}
              >
                {playerAreaList[1]}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className={styles.playCenterRow} style={centerStyle}>
        {centerArea}
      </div>
      <div
        className={
          playerAreaList.length > 3
            ? styles.playPlayerRowSplit
            : styles.playPlayerRow
        }
      >
        {playerAreaList.length > 3 && (
          <React.Fragment>
            <div
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <div
                style={{
                  width: `${halfWidth}px`,
                  height: `${halfHeight}px`,
                  transformOrigin: "top left",
                  transform: "rotate(90deg) translate(0, -100%)",
                }}
              >
                {playerAreaList[3]}
              </div>
            </div>
 
            <div
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <div
                style={{
                  width: `${halfWidth}px`,
                  height: `${halfHeight}px`,
                  transformOrigin: "top left",
                  transform: "rotate(-90deg) translate(-100%, 0%)",
                }}
              >
                {playerAreaList[2]}
              </div>
            </div>
          </React.Fragment>
        )}
        {playerAreaList.length === 3 && playerAreaList[2]}
        {playerAreaList.length < 3 && playerAreaList[1]}
      </div>
    </div>
  );
};
 
export default PlayLayout;
