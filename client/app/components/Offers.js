import React from 'react';
import Offer from './Offer';
import { connect } from 'react-redux';

const mapStateToProps = ({ offers }) => ({
  offers
});

const Offers = ({ offers, children }) => {
  console.log(offers);
  return(
    <div className="offers">
      {offers.map(offer =>
        <Offer key={parseInt(offer.id)} offer={offer} />
      )}
    </div>)
};

export default connect(mapStateToProps)(Offers);
