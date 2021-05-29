const postReducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return posts;
    case 'FETCH_VIDEOS':
      return posts;
    default:
      return posts;
  }
};

export default postReducer;
