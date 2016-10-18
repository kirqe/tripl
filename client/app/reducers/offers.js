
const initialState = [
  {
    offers: []
  }
]

export const offers = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_OFFERS':
      console.log('get offers dispatcher');
      return action.offers.data || state;
    default:
      return state;
  }
};
