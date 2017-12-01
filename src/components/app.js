import React from 'react';
import 'assets/scss/app.scss';

import Welcome from 'components/welcome.js';

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <Welcome />
          <div class="nextpage">
          </div>
        </div>
    );
  }
}

export default App;
