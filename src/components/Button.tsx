import React from "react";

interface IBtnProps {
  color: string;
  text: string;
  action: () => void;
}

const Button = ({ color, text, action }: IBtnProps) => {
  return (
    <button onClick={action} className={`btn-${color}`}>
      {text}
    </button>
  );
};
export default Button;
