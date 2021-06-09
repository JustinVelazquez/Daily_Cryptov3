import logo from './logo.svg';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import PriceTicker from './components/price-ticker/priceTicker';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { getMedia } from './actions/media';
import { getCoins } from './actions/prices';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/Content/posts/Posts';
import Media from './components/Content/Media/Media';

// function TallComponent() {
//   return Array.from({ length: 1000 }, (_, i) => (
//     <div className="h-16">{i}</div>
//   ));
// }
// this is a comment to get a  commit  push... i can barely type

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <div className="flex min-h-screen ">
          <div className="w-1/12 p-2 px-2 py-4 sticky top-0 h-full">
            <NavBar />
          </div>
          <div className="flex-1">
            <Posts />
            {/* <Media /> */}
          </div>
          <div className="w-1/12 sticky top-0 h-full">
            <PriceTicker />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
