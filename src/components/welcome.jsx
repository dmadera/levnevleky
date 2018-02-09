import React from 'react';
import 'assets/scss/welcome.scss';
import Heading from  'components/welcome/heading';
import CardAreal from 'components/welcome/card-areal';
import CardNavigation from 'components/welcome/card-navigation';
import CardWeather from 'components/welcome/card-weather';
import CardCams from 'components/welcome/card-cams';


class Component extends React.PureComponent {

  render() {
    return (
      <section class="welcome">
        <div className="site-wrapper">
          <div class="site-wrapper-inner">
            <div class="inner">
              <div class="row">
                <Heading />
              </div>
              <div class="row">
                <div class="col-lg-3">
                  <CardAreal />
                </div>
                <div class="col-lg-3">
                </div>
                <div class="col-lg-3">

                </div>
                <div class="col-lg-3">
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
