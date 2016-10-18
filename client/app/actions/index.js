export const getOffers = offers => ({ type: 'GET_OFFERS', offers: offers });


export const fetchOffers = () => {
  return dispatch => {
    fetch('http://api.tripl.dev/v1/offers')
      .then(res => res.json())
      .then(json => dispatch(getOffers(json)));
  }
};
