const coinReducer = (coins = [], action) => {
  switch (action.type) {
    case 'FETCH_COINS':
      return action.payload;
    default:
      return coins;
  }
};

export default coinReducer;
