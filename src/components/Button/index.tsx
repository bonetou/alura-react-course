import React from "react";
import ButtonStyle from "./Button.module.scss";


interface IProps {
	children: React.ReactNode
}


class Button extends React.Component<IProps & {
  type?: "button" | "submit" | "reset" | undefined
}> {
  render(): React.ReactNode {
    const { type = "button" } = this.props
    return (
      <button type={type} className={ButtonStyle.button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button