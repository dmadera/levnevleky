import React from 'react';
import 'assets/scss/app.scss';

import Navbar from 'components/navbar';
import Welcome from 'components/welcome';
import About from 'components/about';
import ChildOnBob from 'components/child-on-bob';
import PriceList from 'components/price-list';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Welcome />
        <About />
        <PriceList />
        <ChildOnBob />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
