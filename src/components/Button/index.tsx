import React from "react";
import ButtonStyle from "./Button.module.scss";


class Button extends React.Component {
  render(): React.ReactNode {
    return (
      <button className={ButtonStyle.button}>
        Button
      </button>
    )
  }
}

export default Button