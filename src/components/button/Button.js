import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Button extends Component {
    emitEvent() {
        if (this.props.emitEvent) this.props.emitEvent();
    };
    render() {
        const { buttonText } = this.props;

        return(
            <button onClick={() => this.props.emitEvent()} data-test='buttonClass'>{buttonText}</button>
        );
    };
};

Button.propTypes = {
    text: PropTypes.string,
    emitEvent: PropTypes.func
};

export default Button;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class SharedButton extends Component {

//     submitEvent(){
//         if(this.props.emitEvent){
//             this.props.emitEvent();
//         }
//     }

//     render(){
//         const { buttonText } = this.props;

//         return(
//             <button onClick={() => this.submitEvent()} data-test="buttonComponent">
//                 {buttonText}
//             </button>
//         );
//     }
// }

// SharedButton.propTypes = {
//     buttonText: PropTypes.string,
//     emitEvent: PropTypes.func
// };

// export default SharedButton;