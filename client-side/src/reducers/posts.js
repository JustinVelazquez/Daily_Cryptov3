const postReducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_MEDIA':
      return action.payload;
    default:
      return posts;
  }
};

export default postReducer;
