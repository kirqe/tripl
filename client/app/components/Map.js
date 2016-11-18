import React, {PropTypes, Component} from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';
// import MyGreatPlace from './my_great_place.jsx';
import GoogleMap from 'google-map-react';


export default class SimpleMapPage extends Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 1,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  // shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>

      </GoogleMap>
    );
  }
}
