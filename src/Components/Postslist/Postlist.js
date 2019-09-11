import React from 'react';
import './Postlist.css';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

function Postlist({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => <Post post={post} key={post.id} />)}
    </div>
  );
}

Postlist.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Postlist;
