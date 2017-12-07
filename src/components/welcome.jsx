import React from 'react';
import 'assets/scss/welcome.scss';
import lift from 'assets/img/lift-icon.png';
import open from 'assets/img/opened.svg';
import close from 'assets/img/closed.svg';
import check from 'assets/img/check.svg';
import family from 'assets/img/family.png';
import track1 from 'assets/img/track1.svg';
import track2 from 'assets/img/track2.svg';
import track3 from 'assets/img/track3.svg';
import tracks from 'assets/img/tracks.svg';
import camera1 from 'assets/img/camera1.jpg';
import camera2 from 'assets/img/camera2.jpg';
import Navbar from 'components/navbar.js';

class Welcome extends React.PureComponent {
  render() {
    return (
      <section class="welcome site-wrapper">
        <div class="site-wrapper-inner">
          <div class="inner">
            <div class="row position-relative">
              {/*<section class="jumbotron text-center">*/}
                <div class="col-md-6 family">
                  <img src={family} />
                </div>
                <div class="col-md-6 title">
                  <h1 class="card">Užijte si rodinné lyžování zcela bez front!</h1>
                </div>
                {/*</section>*/}
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card vleky">
                      <div class="card-header">Vleky</div>
                      <table class="table">
                        <tr>
                          <td><img src={lift} /></td>
                          <td>KOTVA</td>
                          <td>500m</td>
                          <td><img src={check} /></td>
                        </tr>
                        <tr>
                          <td><img src={lift} /></td>
                          <td>POMA</td>
                          <td>300m</td>
                          <td><img src={check} /></td>
                        </tr>
                      </table>
                      <div class="card-header">Zasněžování</div>
                      <div class="card-footer">
                        <a href="#" class="btn btn-dark">Více o areálu</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="card sjezdovky">
                      <div class="card-header">Sjezdovky</div>
                      <table class="table">
                        <tr>
                          <td><img src={track1} /></td>
                          <td>střední</td>
                          <td><img class="check" src={check} /></td>
                        </tr>
                        <tr>
                          <td><img src={track2} /></td>
                          <td>lehká</td>
                          <td><img class="check" src={check} /></td>
                        </tr>
                        <tr>
                          <td><img src={track3} /></td>
                          <td>lehká</td>
                          <td><img class="check" src={check} /></td>
                        </tr>
                        <tr>
                          <td><img src={tracks} /></td>
                          <td>snowpark</td>
                          <td><img class="check" src={check} /></td>
                        </tr>
                      </table>
                      <div class="text-center">
                        <a href="#" class="btn btn-dark">Mapa areálu</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <span class="card-header">Počasí</span>
                      <table class="table">
                        <tr>
                          <td>Teplota: 0.3 °C</td>
                        </tr>
                        <tr>
                          <td>Pocitová teplota: 0.3 °C</td>
                        </tr>
                        <tr>
                          <td>Vítr: 1.00 m/s západní</td>
                        </tr>
                        <tr>
                          <td>Srážky: 0.0 mm</td>
                        </tr>
                        <tr>
                          <td>Sníh: 10 cm technický</td>
                        </tr>
                      </table>
                      <span class="aktualizace">10:00 10.11.2017</span>
                    </div>

                  </div>
                  <div class="col-sm-6">
                    <div class="card kamery">
                      <div class="card-header">Kamery</div>
                      <div class="row">
                        <div class="col-sm-6">
                          <div>
                            <img src={camera1} />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div>
                            <img src={camera2} />
                          </div>
                        </div>
                      </div>
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

export default Welcome;
