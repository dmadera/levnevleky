import React from 'react';
import 'assets/scss/child-on-bob.scss';
import childOnBob from  'assets/img/child-on-bob.png';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="page child-on-bob">
        <div class="motto">
          <p>
            U nás si své přijde opravdu každy!
          </p>
        </div>
      </section>
    );
  }
}

export default Component;
