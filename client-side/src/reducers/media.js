const MediaReducer = (media = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      default:
        return media;
    }
  };
  
  export default MediaReducer;
  