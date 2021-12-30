import "./loader.scss";
import React from "react";

const Loader = () => {
  return (
    <div className="box">
      <div className="planet"></div>
    </div>
  );
};

export default React.memo(Loader);
