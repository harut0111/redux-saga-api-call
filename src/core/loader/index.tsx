import React from "react";
import './style.scss';

const Loader: React.FC<{ className: string}> = ({className}) => {
  return (
    <div className={className}>
          <div className="loader">
      <div className="face">
        <div className="circle"></div>
      </div>
      <div className="face">
        <div className="circle"></div>
      </div>
    </div>
    </div>

  );
};

export default Loader;
