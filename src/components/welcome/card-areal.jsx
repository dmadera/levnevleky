import React from 'react';
import kotva from 'assets/img/icon-kotva.svg';
import poma from 'assets/img/icon-poma.svg';
import close from 'assets/img/closed-blur.svg';
import open from 'assets/img/open-blur.svg';
import snow from 'assets/img/icon-snow.svg';

class Component extends React.PureComponent {

  render() {
    return (
      <div class="card areal">
        <div class="card-header">Vleky</div>
        <table class="table lifts">
          <tr>
            <td class="icon"><img src={kotva} /></td>
            <td>KOTVA</td>
            <td>500m</td>
            <td class="text-right"><img src={open} /></td>
          </tr>
          <tr>
            <td class="icon"><img src={poma} /></td>
            <td>POMA</td>
            <td>300m</td>
            <td class="text-right"><img src={close} /></td>
          </tr>
        </table>
        <div class="card-header">Aktuální stav</div>
        <div class="curweather">
          <div class="row">
            <div class="col-4">
              <span class="icon"><i class="fa fa-thermometer-half fa-2x" /></span>
              <span class="icon-text"><span>3°C</span></span>
            </div>
            <div class="col-8">
              <span class="icon"><i class="fa fa-snowflake-o fa-2x" /></span>
              <span class="icon-text">
                <span>40-50cm<br/>technicky<br/>zasněžujeme</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Component;
