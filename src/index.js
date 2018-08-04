import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowerRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import PostsNew from './components/posts_new';

import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsShow from './components/posts_show'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowerRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component = { PostsNew } />
          <Route path="/posts/:id" component={ PostsShow } />
          <Route path="/" component={ PostsIndex } />
        </Switch>
      </div>
    </BrowerRouter>
  </Provider>
  , document.querySelector('.container'));
