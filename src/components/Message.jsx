import React from "react";

const Message = (props) => {
  const { color, children } = props;
  const colorStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={colorStyle}>{children}</p>;
};

export default Message;
