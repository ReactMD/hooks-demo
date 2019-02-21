import React, { useState, useEffect, memo } from "react";
import "./Snowflake.scss";

const snowFlakeStyle = (x, y, size) => {
  return {
    top: y,
    left: x,
    fontSize: size
  };
};

const randomXLocation = () => Math.floor(Math.random() * window.innerWidth);
const randomYLocation = size => {
  const thirdHeight = window.innerHeight / 3;
  return 2 * thirdHeight + Math.floor(Math.random() * thirdHeight);
};

export default memo(({ size = 10 }) => {
  const [x, setX] = useState(randomXLocation());
  const [y, setY] = useState(0);

  // Equivalent to componentDidMount lifecycle because of empty array parameter
  useEffect(() => {
    if (!y) {
      setX(randomXLocation());
      setY(randomYLocation(size));
    }
  }, []);

  return (
    <div className="snowflake" style={snowFlakeStyle(x, y, size)}>
      ❅
    </div>
  );
});
