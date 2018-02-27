import React from 'react';
import 'assets/scss/welcome.scss';
import CardAreal from 'components/welcome/card-areal';
import CardWeather from 'components/welcome/card-weather';

import facebook from 'assets/img/icons/facebook.svg';
import instagram from 'assets/img/icons/instagram.svg';
import youtube from 'assets/img/icons/youtube.svg';
import email from 'assets/img/icons/email.svg';
import webcam from 'assets/img/icons/webcam.svg';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="welcome">
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="inner">
              <div className="row quick-icons">
                <ul>
                  <li><a href="#"><img src={facebook} /></a></li>
                  <li><a href="#"><img src={instagram} /></a></li>
                  <li><a href="#"><img src={youtube} /></a></li>
                  <li><a href="#"><img src={email} /></a></li>
                  <li><a href="#"><img src={webcam} /></a></li>
                </ul>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <CardAreal />
                </div>
                <div className="col-lg-3">
                </div>
                <div className="col-lg-3">
                </div>
                <div className="col-lg-3">
                  <CardWeather />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Component;
