import React from 'react';
import 'assets/scss/footer.scss';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="footer container-fluid">
        <div className="row">

          <div className="col-md-4 fcontainer">
            <h5>Naši partneři</h5>
            <ul>
              <li>Liberecká bouda</li>
              <li>LIPA VELKOOBCHOD PAPÍREM s.r.o.</li>
              <li>PEMA VELKOOBCHOD s.r.o.</li>
            </ul>
          </div>

          <div className="col-md-4 fcontainer">
            <h5>Kontakt</h5>
            <ul>
              <li>info@levnevleky.cz</li>
              <li>(+420) 602 22 44 43</li>
              <li>www.levnevleky.cz</li>
            </ul>
          </div>

          <div className="col-md-4 fcontainer">
            <h5>Provozní doba</h5>
            <ul>
              <li>9:00 - 16:00</li>
              <li>v únoru 9:00 - 16:30</li>
            </ul>
            <div className="cards">
              <i class="fa fa-cc-mastercard"></i>
              <i class="fa fa-cc-visa"></i>
            </div>
          </div>



        </div>
      </section>
    );
  }
}

export default Component;
