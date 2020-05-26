import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        const { headline, description } = this.props;

        if (!headline) return <p>No Headline!</p>;

        return (
            <div data-test='headlineClass'>
                <h3 data-test='headline'>{headline}</h3>
                <p data-test='description'>{description}</p>
            </div>
        );
    };
};

Headline.propTypes = {
    headline: PropTypes.string,
    description: PropTypes.string
};

export default Headline;