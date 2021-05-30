import React from 'react';
import { useSelector } from 'react-redux';
import Post from 'post'

function Posts() {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
        {posts.map(post =>(
            <Post />           
        ))}
    </div>
  );
}
