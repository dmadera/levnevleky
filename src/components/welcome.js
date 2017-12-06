import React from 'react';
import 'assets/scss/welcome.scss';
import lift from 'assets/img/lift-icon.png';
import open from 'assets/img/opened.svg';
import close from 'assets/img/closed.svg';
import family from 'assets/img/family.png';
import groomer from 'assets/img/groomer.png';
import track1 from 'assets/img/track1.svg';
import track2 from 'assets/img/track2.svg';
import track3 from 'assets/img/track3.svg';
import tracks from 'assets/img/tracks.svg';
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
              <div class="col-md-3">
                <div class="card">
                  <div class="card-header">Vleky</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <img src={lift} />
                      KOTVA 500m
                      <img src={open} class="float-right" alt="V provozu" />
                    </li>
                    <li class="list-group-item">
                      <img src={lift} />
                      POMA 300m
                      <img src={close} class="float-right" alt="V provozu" />
                    </li>
                  </ul>
                  <div class="card-footer">
                    <a href="#" class="btn btn-dark">Více o areálu</a>
                  </div>
                </div>
              </div>
              <div class="col-md-3 sjezdovky">
                <div class="card">
                  <table class="table">
                    <tr class="card-header">
                      <th colspan="4">Sjezdovky</th>
                    </tr>
                    <tr>
                      <td>
                        <img src={track1} alt="V provozu" />
                        </td><td>střední</td><td>
                        <img src={open} alt="V provozu" />
                      </td>
                      <td>
                        <img src={groomer} alt="V provozu" />
                      </td>
                      </tr>
                      <tr>
                      <td>
                        <img src={track2} alt="V provozu" />
                        </td><td>lehká</td><td>
                        <img src={open} alt="V provozu" />
                      </td>
                      <td>
                        <img src={groomer} alt="V provozu" />
                      </td>
                      </tr>
                      <tr>
                      <td>
                        <img src={track3} alt="V provozu" />
                        </td><td>lehká</td><td>
                        <img src={open} alt="V provozu" />
                      </td>
                      <td>
                        <img src={groomer} alt="V provozu" />
                      </td>
                      </tr>
                      <tr>
                      <td>
                        <img src={tracks} alt="V provozu" />
                        </td><td>snowpark</td><td>
                        <img src={open} alt="V provozu" />
                      </td>
                      <td>
                        <img src={groomer} alt="V provozu" />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <div class="card-header">Vleky</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <img src={lift} />
                      KOTVA 500m
                      <img src={open} class="float-right" alt="V provozu" />
                    </li>
                    <li class="list-group-item">
                      <img src={lift} />
                      POMA 300m
                      <img src={close} class="float-right" alt="V provozu" />
                    </li>
                  </ul>
                  <div class="card-footer">
                    <a href="#" class="btn btn-dark">Více o areálu</a>
                  </div>
                </div>

              </div>
              <div class="col-md-3">
                <div class="card">
                  <div class="card-header">Vleky</div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <img src={lift} />
                      KOTVA 500m
                      <img src={open} class="float-right" alt="V provozu" />
                    </li>
                    <li class="list-group-item">
                      <img src={lift} />
                      POMA 300m
                      <img src={close} class="float-right" alt="V provozu" />
                    </li>
                  </ul>
                  <div class="card-footer">
                    <a href="#" class="btn btn-dark">Více o areálu</a>
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
