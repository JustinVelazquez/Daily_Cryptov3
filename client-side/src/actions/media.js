import * as cpApi from '../api/cryptoPanic';

export const getMedia = () => async (dispatch) => {
    try {
      const { data } = await cpApi.fetchMedia();
      dispatch({ type: 'FETCH_MEDIA', payload: data });
    } catch (err) {
      console.log(err);
    }
  };
  