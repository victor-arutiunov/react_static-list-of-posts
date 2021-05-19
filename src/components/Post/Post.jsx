import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = function({ id, title, body, user, comments }) {
  return (
    <li key={id} className="Post">
      <h2>
        Post title:
        {title}
      </h2>
      <p>
        <b>Text:</b>
        {' '}
        {body}
      </p>
      <User {...user} />
      <CommentList comments={comments} />
    </li>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  // eslint-disable-next-line
  user: PropTypes.object.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

Post.defaultProps = {
  body: 'User left empty blank',
};

export default Post;
