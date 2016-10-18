import React from 'react';
import { connect } from 'react-redux';

const Offer = ({ offer }) => {
  return(
    <div className="offer">
      <h3>{offer.attributes && offer.attributes.title}</h3>
      <p className="excerpt">{offer.attributes && offer.attributes.excerpt}</p>
      <div className="ometa">
        <span className="label label-info">{offer.attributes && offer.attributes.offer_type}</span>
        <span className="label label-success">
         {offer.attributes && (`${offer.attributes.salary + ' ' + offer.attributes.currency}`)}
        </span>
        <span className="label label-default">Expire: {offer.attributes && offer.attributes.expire_at}</span>
      </div>
    </div>
  );
};

export default Offer;
