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
      <section class="welcome site-wrapper">
        <div class="site-wrapper-inner">
          <div class="inner">
            <div class="row position-relative">
              <Heading />
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-sm-6">
                      <CardAreal />
                    </div>
                    <div class="col-sm-6">
                      <CardNavigation />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-sm-6">
                      <CardWeather />
                    </div>
                    <div class="col-sm-6">
                      <CardCams />
                    </div>
                  </div>
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
