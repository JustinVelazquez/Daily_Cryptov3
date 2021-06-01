import * as cgApi from '../api/coinGecko';

//Action Creators
export const getCoins = () => async (dispatch) => {
  try {
    const { data } = await cgApi.fetchCoins();

    dispatch({ type: 'FETCH_COINS', payload: data });
  } catch (err) {
    console.log(err);
  }
};
