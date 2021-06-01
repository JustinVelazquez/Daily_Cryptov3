import * as cpApi from '../api/cryptoPanic';

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await cpApi.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (err) {
    console.log(err);
  }
};

// export const getMedia = () => async (dispatch) => {
//   try {
//     const { data } = await cpApi.fetchMedia();
//     dispatch({ type: 'FETCH_MEDIA', payload: data });
//   } catch (err) {
//     console.log(err);
//   }
// };
