import React, { useState, memo } from "react";
import uuid from "uuid";
import "./Body.scss";
import Snow from "../Snow/Snow";
import useInterval from "../../hooks/useInterval";

export default memo(() => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [numSnowflakes, setNumSnowflakes] = useState(10);

  useInterval(
    () => {
      if (snowflakes.length) {
        setSnowflakes(snowflakes.slice(50));
      }
    },
    snowflakes.length > 0 ? 10000 : null
  );

  const setSnowflakeNum = e => {
    const val = parseInt(e.target.value, 10);
    if (val > 0) {
      setNumSnowflakes(val);
    }
  };

  const addSnowflake = () => {
    setSnowflakes([
      ...snowflakes,
      ...Array.from(Array(numSnowflakes).keys()).map(_ => ({
        id: uuid(),
        size: Math.floor(Math.random() * 100)
      }))
    ]);
  };

  return (
    <div className="body">
      <Snow snowflakes={snowflakes} />
      <div onClick={addSnowflake} className="snowflake-button">
        ❅
      </div>
      <input
        className="snowflake-input"
        value={numSnowflakes}
        onChange={setSnowflakeNum}
        type="number"
      />
    </div>
  );
});
