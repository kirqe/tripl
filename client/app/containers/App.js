// import * as Redux from 'redux';
// import { render } from 'react-dom';
//
// console.log();
//
// const store = Redux.createStore((state, action) => {
//   switch(action.type){
//     case 'ADD_OFFER':
//       let newOffer = Object.assign({}, action.data, {
//         approved: true,
//         id: +new Date
//       });
//
//       return Object.assign({}, state, {
//         offers: [...state.cards, ...newOffer]
//       });
//     default:
//       return state || { offers: [] };
//   }
// });
//
// store.subscribe(() => {
//   console.log(store.getState());
// })
//
// store.dispatch({
//   type: 'ADD_OFFER',
//   data: {
//     approved: false
//   }
// })
//
//
// export default store;


/*

FETCH_OFFERS
FETCH_OFFER
ADD_OFFER
SHOR_ADD_FORM
HIDE_ADD_FORM

*/
