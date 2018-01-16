import React from 'react';
import 'assets/scss/app.scss';

import Navbar from 'components/navbar';
import Welcome from 'components/welcome';
import About from 'components/about';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Welcome />
        <About />
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
