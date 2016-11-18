import React from 'react';
import { connect } from 'react-redux';
import Offer from './Offer';
import Offers from './Offers';
import Sidenav from './Sidenav';
import GettingStartedGoogleMap from './Map';

const mapStateToProps = state => ({
  offers: state.offers
})

const App = ({offers, children}) => {
  return (
    <div className="app container-fluid">
      <div className="row">
        <div className="col-md-6">
          <Sidenav />
          <Offers offers={offers} />
        </div>
        <div className="col-md-6">
          <GettingStartedGoogleMap />
        </div>

        {children}
      </div>
    </div>);
};

export default connect(mapStateToProps)(App);
