import * as cpApi from '../api/cryptoPanic';

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await cpApi.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
