import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post/post';

function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts)
  return (
    <div>
      {posts.results.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  
  )
}

export default Posts;
