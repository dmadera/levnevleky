import React from 'react';
import camera1 from 'assets/img/camera1.jpg';
import camera2 from 'assets/img/camera2.jpg';

class Component extends React.PureComponent {

  render() {
    return (
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
    );
  }
}

export default Component;
