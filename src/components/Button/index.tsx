import React from "react";
import ButtonStyle from "./Button.module.scss";


interface IProps {
	children: React.ReactNode
}


class Button extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <button className={ButtonStyle.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button