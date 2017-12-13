import React from 'react';
import 'assets/scss/welcome.scss';
import kotva from 'assets/img/icon-kotva.svg';
import poma from 'assets/img/icon-poma.svg';
import close from 'assets/img/closed-blur.svg';
import open from 'assets/img/open-blur.svg';
import family from 'assets/img/family.png';
import track1 from 'assets/img/track1.svg';
import track2 from 'assets/img/track2.svg';
import track3 from 'assets/img/track3.svg';
import tracks from 'assets/img/tracks.svg';
import camera1 from 'assets/img/camera1.jpg';
import camera2 from 'assets/img/camera2.jpg';
import Navbar from 'components/navbar.js';

class Welcome extends React.PureComponent {

  componentWillMount() {
    (function(d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0];
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src="https://weatherwidget.io/js/widget.min.js";
        fjs.parentNode.insertBefore(js,fjs);
      }
    }
    (document,"script","weatherwidget-io-js"));
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11';
              fjs.parentNode.insertBefore(js, fjs);

    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <section class="welcome site-wrapper">
        <div class="site-wrapper-inner">
          <div class="inner">
            <div class="row position-relative">
              {/*<section class="jumbotron text-center">*/}
                {/*<div class="col-md-6 family">
                  <img src={family} />
                </div>
                <div class="col-md-6 title">
                  <div class="">
                    <h1>
                      Lyžování v srdci Krkonoš
                    </h1>
                    <p class="caption"><span class="quote">"</span>U nás nestojíte fronty, u nás lyžujete.<span class="quote">"</span></p>
                  </div>
                </div>*/}
              </div>
                <section class="heading text-center">
                  <h1>Lyžování v srdci Krkonoš</h1>
                  <h2><span class="quotes">"</span>U nás nestojíte fronty, u nás lyžujete.<span class="quotes">"</span></h2>
               </section>

            <div class="row news">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card vleky">
                      <div class="card-header">Vleky</div>
                      <table class="table lifts">
                        <tr>
                          <td class="lift"><img src={kotva} /></td>
                          <td>KOTVA</td>
                          <td>500m</td>
                          <td><img src={open} /></td>
                        </tr>
                        <tr>
                          <td class="lift"><img src={poma} /></td>
                          <td>POMA</td>
                          <td>300m</td>
                          <td><img src={close} /></td>
                        </tr>
                      </table>
                      <div class="card-header extra-border-top">Aktuální počasí</div>
                      <div class="curweather">
                        <div class="row">
                          <div class="col-4">
                            <span class="icon"><i class="fa fa-thermometer-half fa-2x" /></span>
                            <span class="icon-text"><span>3°C<br/>(2°C)</span></span>
                          </div>
                          <div class="col-8">
                            <span class="icon"><i class="fa fa-snowflake-o fa-2x" /></span>
                            <span class="icon-text"><span>40-50cm<br/>technicky</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div class="col-sm-6">
                      <div class="card info">
                        <div class="card-header">Další informace</div>
                        <div  class="row">
                          <div class="col-6">
                            <div>
                              <i class="fa fa-ticket fa-2x" aria-hidden="true"></i>
                              skipass
                            </div>
                          </div>
                          <div class="col-6">
                            <div>
                              <i class="fa fa-map-o fa-2x" aria-hidden="true"></i>
                              skimapa
                            </div>
                          </div>
                        </div>
                        <div  class="row">
                          <div class="col-6">
                            <div>
                              <i class="fa fa-bed fa-2x" aria-hidden="true"></i>
                              ubytovnání
                            </div>
                          </div>
                          <div class="col-6">
                            <div>
                              <i class="fa fa-cutlery fa-2x" aria-hidden="true"></i>
                              občerstvení
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*<div class="card sjezdovky">
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
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="card">
                      <a class="weatherwidget-io" href="https://forecast7.com/cs/50d6515d66/dolni-dvur/" data-label_1="DOLNÍ DVŮR" data-label_2="Počasí" data-font="Helvetica" data-days="5" data-theme="pure">DOLNÍ DVŮR Počasí</a>
                      {/* <span class="card-header">Počasí</span>
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
                      <span class="aktualizace">10:00 10.11.2017</span> */}
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
