import React from 'react';
import 'assets/scss/app.scss';

import Navbar from 'components/navbar';
import Welcome from 'components/welcome';
import About from 'components/about';
import ChildOnBob from 'components/child-on-bob';
import PriceList from 'components/price-list';

import Footer from 'components/footer';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Welcome />
        <About />
        <PriceList />
        <ChildOnBob />
        <Footer />
      </div>
    );
  }
}

export default App;
