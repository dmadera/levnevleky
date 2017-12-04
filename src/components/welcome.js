import React from 'react';
import 'assets/scss/welcome.scss';
import lift from 'assets/img/lift-icon.png';
import open from 'assets/img/opened.svg';
import close from 'assets/img/closed.svg';
import Navbar from 'components/navbar.js';

class Welcome extends React.PureComponent {
  render() {
    return (
      <div class="site-wrapper">
        <div class="site-wrapper-inner">
          <div class="inner">
            <div class="row">
              <div class="col-sm-3">
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
              <div class="col-sm-3">
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
              <div class="col-sm-3">
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
              <div class="col-sm-3">
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
      </div>
    );
 }
        }

export default Welcome;
