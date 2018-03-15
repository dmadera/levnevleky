import React from 'react';
import 'assets/scss/skimap.scss';
import PageTitle from 'components/page-title';

class Component extends React.PureComponent {

  render() {
    return (
      <section className="page skimap">
        <PageTitle title="Skimapa" />
        <div className="map"></div>
      </section>
    );
  }
}

export default Component;
