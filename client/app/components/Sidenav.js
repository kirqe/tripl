import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({

});

const Sidenav = () => {
  return(
    <div className="sideLeft col-md-6">
      <ul className="sideNav">
        <li><a href="#" >Add new offer</a></li>
        <li><a href="#" >Click</a></li>

      </ul>

    </div>
  );
};


export default connect(null, mapDispatchToProps)(Sidenav);
