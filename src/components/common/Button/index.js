import React from "react";

const Button = (props) => {
  return (
    <React.Fragment>
      <div onClick={() => props?.onClick} className={`${props?.className}`}>
        {props.title}
      </div>
    </React.Fragment>
  );
};

export default Button;
