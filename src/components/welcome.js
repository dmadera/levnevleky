import React from 'react';
import 'assets/scss/welcome.scss';
import lift from 'assets/img/lift-icon.png';
import open from 'assets/img/opened.svg';
import close from 'assets/img/closed.svg';
import family from 'assets/img/family.png';
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
