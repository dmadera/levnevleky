import React from 'react';
import 'assets/scss/map.scss';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Component extends React.PureComponent {

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: 50.6608809, lng: 15.6307662 }}>
        <Marker position={{ lat: 50.6608809, lng: 15.6307662 }} />
      </GoogleMap>
    ))

    const element = <div className="map" />;

    return (
      <section className="page map">
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKqrLqY9pd1zvN0OUPbe7lN3m36AMTf4s&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={element}
          containerElement={element}
          mapElement={element}
        />
      </section>
    );
  }
}

export default Component;
