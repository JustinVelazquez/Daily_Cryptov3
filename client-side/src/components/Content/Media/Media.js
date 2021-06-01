import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMedia } from '../../../actions/media';

function Media() {
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMedia())
  },[dispatch])


  return (
    <div className="flex">
      {/* {posts.results.map((post) => (
        <Post key={post.id} post={post} />
      ))} */} <h1>This is Media</h1>
    </div>
  
  )
}

export default Media;
