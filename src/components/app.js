import React from 'react';
import 'assets/scss/app.scss';

import Navbar from 'components/navbar.js';
import Welcome from 'components/welcome.jsx';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Welcome />
        <div class="nextpage">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
