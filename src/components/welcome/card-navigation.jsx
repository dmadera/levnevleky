import React from 'react';

class Component extends React.PureComponent {

  render() {
    return (
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
    );
  }
}

export default Component;
