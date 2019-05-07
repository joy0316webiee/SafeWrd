import React, { Component } from "react";

// Style
import style from "./style.module.scss";

class ButtonLink extends Component {
  render() {
    return (
      <div className={style.buttonWrapper}>
        <button
          onClick={this.props.onClick}
          className={(this.props.active && style.active) || {}}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default ButtonLink;
