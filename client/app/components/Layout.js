import React from 'react';
import $ from 'jquery';
import Offer from './Offer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {offers: []};
  }

  componentWillMount() {
    $.get('http://api.tripl.dev/v1/offers', (result) => {
      this.setState({offers: result.data})
      console.log(result);
    })
  }

  addO = (e) => {
    e.preventDefault();
    const offers = this.state.offers;
    const newId = offers[offers.length - 1].id+1;
    this.setState({
      offers: offers.concat({id: newId, attributes: { title: "hellooooooo", excerpt: "alallalalalalalalalla" }})
    })
  }

  render() {
    return (
      <div id='Layout' className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1>Hello World!</h1>
          </div>
          <div className="offers col-md-6">
            <a href="#" className="btn" onClick={this.addO}>Click</a>
            {this.state.offers.map(offer =>
              <Offer key={offer.id} {...offer.attributes} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Layout.defaultProps = {offers: []};

export default Layout;
