import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    render() {
        const { title, body } = this.props;

        if (!title) return null;
        
        return(
            <div data-test='postClass'>
                <h3 data-test='title'>{title}</h3>
                <p data-test='body'>{body}</p>
            </div>
        );
    };
};

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};

export default Post;