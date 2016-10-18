// import React from 'react';
// // import $ from 'jquery';
// import Offer from './Offer';
// import { connect } from 'react-redux';
//
//
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {offers: []};
//   // }
//
//   // componentWillMount() {
//   //   $.get('http://api.tripl.dev/v1/offers', (result) => {
//   //     this.setState({offers: result.data})
//   //     console.log(result);
//   //   })
//   // }
//
//   // addO = (e) => {
//   //   e.preventDefault();
//   //   const offers = this.state.offers;
//   //   const newId = offers[offers.length - 1].id+1;
//   //   this.setState({
//   //     offers: offers.concat({id: newId, attributes: { title: "hellooooooo", excerpt: "alallalalalalalalalla" }})
//   //   })
//   // }
// const mapStateToProps = ({offers}) => {}
//
// const offers = ({offers}) => {
//   return(
//     <div id='Layout' className="container-fluid">
//     <div className="offers">
//       {this.state.offers.map(offer =>
//         <Offer key={offer.id} {...offer.attributes} />
//       )}
//     </div>
//     </div>
//
//   )
// }
// //
// //   render() {
// //     return (
// //       <div id='Layout' className="container-fluid">
// //         <div className="row">
// //           <div className="sideLeft col-md-6">
// //             <ul className="sideNav">
// //               <li><a href="#" onClick={this.addO}>Add new offer</a></li>
// //               <li><a href="#" onClick={this.addO}>Click</a></li>
// //
// //             </ul>
// //             <div className="offers">
// //               {this.state.offers.map(offer =>
// //                 <Offer key={offer.id} {...offer.attributes} />
// //               )}
// //             </div>
// //           </div>
// //           <div className="col-md-6 map">
// //             <h1>Hello World!</h1>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }
//
// // Layout.defaultProps = {offers: []};
//
// export default connect(mapStateToProps)(Layout);
