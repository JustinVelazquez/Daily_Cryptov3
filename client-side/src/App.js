import logo from './logo.svg';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { getPing } from './actions/prices'

import Content from './components/Content/Content';

// function TallComponent() {
//   return Array.from({ length: 1000 }, (_, i) => (
//     <div className="h-16">{i}</div>
//   ));
// }

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPing())
  }, [dispatch])

  return (
    <div className="flex min-h-screen ">
      <div className="w-1/4 p-2 px-2 py-4 sticky top-0 h-full">
        <NavBar />
      </div>
      <div className="flex-1">
        {/* <TallComponent /> */}
        <Content />
      </div>
      <div className="w-1/4 sticky top-0 h-full">Right</div>
    </div>
  );
}

export default App;
