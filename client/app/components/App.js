import React from 'react';
import { connect } from 'react-redux';
import Offer from './Offer';
import Offers from './Offers';

const mapStateToProps = state => ({
  offers: state.offers
})

const App = ({offers, children}) => {
  return (
    <div className='app'>
      <h1>sup</h1>

      <Offers offers={offers} />
      {children}
    </div>);
};

export default connect(mapStateToProps)(App);
