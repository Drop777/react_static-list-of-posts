import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import Postlist from './Components/Postslist/Postlist';

const ConsolidatedList = (postApi, commentsApi, usersApi) => postApi.map(
  post => ({
    ...post,
    user: usersApi.find(user => user.id === post.userId),
    comments: commentsApi.filter(comment => comment.postId === post.id),
  })
);

const listWithUsersCommentsPosts = ConsolidatedList(posts, comments, users);

const App = () => (
  <div className="App">
    <h1>List of Posts</h1>
    <Postlist posts={listWithUsersCommentsPosts} />
  </div>
);

export default App;
