import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../actions/posts';
import Post from './post/post';

function Posts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="flex flex-col justify-center">
      {posts.results.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
