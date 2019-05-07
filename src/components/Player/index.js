import React, { Component } from "react";

// Components
import imgPlayer from "../../assets/images/ic_play.png";
import style from "./style.module.scss";

class Player extends Component {
  render() {
    return (
      <div className={style.player}>
        <div className={style.button}>
          <img src={imgPlayer} alt="player" />
        </div>
        <div className={style.title}>
          <span>{this.props.title}</span>
        </div>
        <div className={style.status}>
          <span className={style.statusImg} />
          <span className={style.statusLabel}>LIVE</span>
        </div>
      </div>
    );
  }
}

export default Player;
