const priceReducer = (posts = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      default:
        return posts;
    }
  };
  
  export default priceReducer;
  