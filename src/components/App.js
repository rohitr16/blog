import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import UserPosts from './UserPosts';
import PostDetails from './PostDetails';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/posts/:userId" component={UserPosts} />
          <Route path="/postDetails/:postId" component={PostDetails} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null , actions)(App);
