import React from 'react';
import Posts from './posts/Posts';
import View from './view/view';

function Content() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Posts />
      </div>
      <div className="flex-1">
        <View />
      </div>
    </div>
  );
}

export default Content;
