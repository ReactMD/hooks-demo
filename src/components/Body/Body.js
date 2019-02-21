import React, { useState, memo } from "react";
import uuid from "uuid";
import "./Body.scss";
import Snow from "../Snow/Snow";
import useInterval from "../../hooks/useInterval";

export default memo(() => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [intTime, setIntTime] = useState(5000);

  useInterval(() => {
    setSnowflakes(snowflakes.slice(5));
    setIntTime(intTime - 500);
  }, intTime);

  const addSnowflake = () => {
    setSnowflakes([
      ...snowflakes,
      {
        id: uuid(),
        size: Math.floor(Math.random() * 50)
      }
    ]);
    if (intTime < 5000) {
      setIntTime(intTime + 250);
    }
  };

  return (
    <div className="body">
      <Snow snowflakes={snowflakes} />
      <span>Click to snow!</span>
      <div onClick={addSnowflake} className="snowflake-button">
        ❅
      </div>
    </div>
  );
});
