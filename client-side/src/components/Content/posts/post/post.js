import React from 'react';

const Post = ({ post }) => {
  return (
    <>
      <h1>{post.title} </h1> <span>{post.source.domain}</span>
    </>
  );
};

export default Post;
