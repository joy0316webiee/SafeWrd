import React, { Component } from "react";

// Components
import ButtonLink from "../../components/ButtonLink";

// Style
import imgLogo from "../../assets/images/safewrd_logo.svg";
import style from "./style.module.scss";

const MENU_ABOUT = 0;
const MENU_CONTACT = 1;
class Header extends Component {
  state = {
    activeID: MENU_CONTACT
  };

  render() {
    return (
      <div className={style.header}>
        <div className={style.logo}>
          <img src={imgLogo} alt="logo" />
          <span>SafeWrd</span>
        </div>
        <div className={style.links}>
          <ButtonLink
            label="About"
            active={this.state.activeID === MENU_ABOUT}
            onClick={() => {
              this.setState({ activeID: MENU_ABOUT });
              console.log("adfasd");
            }}
          />
          <ButtonLink
            label="Contact us"
            active={this.state.activeID === MENU_CONTACT}
            onClick={() => {
              this.setState({ activeID: MENU_CONTACT });
            }}
          />
        </div>
      </div>
    );
  }
}

export default Header;
