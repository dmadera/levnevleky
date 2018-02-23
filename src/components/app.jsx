import React from 'react';
import 'assets/scss/app.scss';

import Navbar from 'components/navbar';
import Welcome from 'components/welcome';
import Skimap from 'components/skimap';
import ChildOnBob from 'components/child-on-bob';
import PriceList from 'components/price-list';
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
          <Skimap />
          <PriceList />
          <ChildOnBob />
          <Map />
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
