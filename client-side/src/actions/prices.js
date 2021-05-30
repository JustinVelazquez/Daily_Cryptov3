import * as cgApi from '../api/coinGecko'

//Action Creators
export const getPing = () => async (dispatch) => {
  try {
    const { data } = await cgApi.fetchPing();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (err) {
    console.log(err);
  }
};
