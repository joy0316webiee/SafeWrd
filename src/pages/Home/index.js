import React, { Component } from "react";

// Components
import Header from "../../layout/Header";
import Player from "../../components/Player";

// Resources
import imgPhone from "../../assets/images/phone.png";
import imgFacebookMsg from "../../assets/images/facebook_msg.png";
import imgGoogleAssist from "../../assets/images/google_assist.png";
import imgTick from "../../assets/images/ic_tick.png";

import style from "./style.module.scss";

class Home extends Component {
  render() {
    return (
      <div className={style.home}>
        <Header />
        <div className={style.content}>
          <div className={style.ads}>
            <div className={style.bright} />
            <img src={imgPhone} alt="phone" />
            <div className={style.playerHenry}>
              <Player title="Henry" />
            </div>
            <div className={style.playerMom}>
              <Player title="Mom" />
            </div>
            <div className={style.playerDad}>
              <Player title="Dad" />
            </div>
          </div>
          <div className={style.desc}>
            <h1>Say your SafeWrd, and stream for help.</h1>
            <p>
              Without ever reaching for your phone, say your own personal safe
              word when in trouble and your phone wakes from locked screen,
              streaming live video to your friends and family.
            </p>
          </div>
          <div className={style.create}>
            <div className={style.title}>
              <h3>Create your SafeWrd now</h3>
            </div>
            <div className={style.buttons}>
              <div className={style.facebook}>
                <a href="https://m.me/safewrdbot">
                  <img src={imgFacebookMsg} alt="facebook-message" />
                </a>
              </div>
              <div className={style.google}>
                <img src={imgGoogleAssist} alt="google-assist" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.visited}>
            <div className={style.rating}>
              <div className={style.circleMark}>
                <span />
              </div>
              <div className={style.desc}>
                <div className={style.title}>
                  <span>
                    <strong>88 people</strong> are viewing this page
                  </span>
                </div>
                <div className={style.verified}>
                  <span className={style.verifiedImage}>
                    <img src={imgTick} alt="tick" />
                  </span>
                  <span className={style.verifiedLabel}>Verified by Proof</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.copyright}>
            <p>
              &copy;2019, Tranzmt, Inc. and Safewrd are trademarks of Tranzmt,
              Inc.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
