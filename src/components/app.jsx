import React from 'react';
import 'assets/scss/app.scss';

import Navbar from 'components/navbar';
import Welcome from 'components/welcome';
import Skimap from 'components/skimap';
import PriceList from 'components/price-list';
import Rent from 'components/rent';
import Map from 'components/map';
import ContactUs from 'components/contactus';

import Footer from 'components/footer';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main role="main">
          <Welcome />
          <a className="page-anchor" id="price-list">&nbsp;</a>
          <PriceList />
          <a className="page-anchor" id="skimap">&nbsp;</a>
          <Skimap />
          <a className="page-anchor" id="ski-rental">&nbsp;</a>
          <Rent />
          <a className="page-anchor" id="map">&nbsp;</a>
          <Map />
          <a className="page-anchor" id="contact-us">&nbsp;</a>
          <ContactUs/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
