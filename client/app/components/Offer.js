import React from 'react';

class Offer extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    let props = this.props;
    return(
      <div className="offer">
        <h3>{props.title}</h3>
        <p className="excerpt">{props.excerpt}</p>
        <div className="ometa">
          <span className="label label-info">{props['offer-type']}</span>
          <span className="label label-default">Expire: {props['expire-at']}</span>
        </div>
      </div>
    )
  }
}

export default Offer;
