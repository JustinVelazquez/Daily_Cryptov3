import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="bg-red-500 p-2 m-1 ">
      <h1>{post.title} </h1> <span>{post.source.domain}</span>
    </div>
  );
};

export default Post;
