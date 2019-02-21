import React, { memo } from "react";
import Snowflake from "../Snowflake/Snowflake";

export default memo(({ snowflakes = [] }) => {
  return (
    <div>
      {snowflakes.map(({ id, size }) => (
        <Snowflake key={id} size={size} />
      ))}
    </div>
  );
});
