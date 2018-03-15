import React from 'react';
import 'assets/scss/footer.scss';
import lb from 'assets/img/partners/lb.svg';
import pema from 'assets/img/partners/pema.svg';
import lipa from 'assets/img/partners/lipa.svg';
import visa from 'assets/img/cards/visa.svg';
import mastercard from 'assets/img/cards/mastercard.svg';
import maestro from 'assets/img/cards/maestro.svg';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="footer container-fluid">
        <div className="row">

          <div className="col-md-4 fcontainer partners">
            <h5>Naši partneři</h5>
            <div>
              <a className="lb" href="http://www.libereckabouda.cz"><img src={lb} /></a><br/>
              <a className="lipa" href="http://www.velkoobchodpapirem.cz"><img src={lipa} /></a>
              <a className="pema" href="http://www.velkoobchoddrogerie.cz"><img src={pema} /></a>
            </div>
          </div>

          <div className="col-md-4 fcontainer">
            <h5>Kontakt skiareál</h5>
            <ul>
              <li>
                <a href="mailto:info@levnevleky.cz?subject=Dotaz">info@levnevleky.cz</a>
              </li>
              <li>
                <a href="http://www.levnevleky.cz">www.levnevleky.cz</a>
              </li>
              <li>(+420) 722 901 501</li>
            </ul>
            <h5>Kontakt lyžařská škola</h5>
            <ul>
              <li>
                <a href="mailto:skola@levnevleky.cz?subject=Dotaz">skola@levnevleky.cz</a>
              </li>
              <li>(+420) 722 901 501</li>
            </ul>

          </div>

          <div className="col-md-4 fcontainer">
            <h5>Provozní doba</h5>
            <ul>
              <li>9:00 - 16:00</li>
              <li>v únoru 9:00 - 16:30</li>
            </ul>
            <div className="cards">
              <img src={visa} />
              <img src={mastercard} />
              <img src={maestro} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Component;
