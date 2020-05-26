import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import Button from './components/button/Button';
import Post from './components/post/Post';

import getPosts from './store/actions';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

const initialState = {
  hideBtn: false
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.getPosts();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          
          {!hideBtn &&
            <Button {...configButton} />
          }
          
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  body
                };
                return (
                  <Post key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
};

const mapState = state => ({
    posts: state
});

const mapDispatch = dispatch => ({
    getPosts: () => dispatch(getPosts())
});

export default connect(mapState, mapDispatch)(App);
