import React from 'react';
import propTypes from 'prop-types';

/**
 * Shows the dial and hangup button
 * It is changed when you press the dial button with hangup for 10 sec
 * @param {*} props
 */
const Dial = props => {
    return (
        <div className="dial-container">
            {!props.dialing ? (
                <button className="dial" onClick={props.eventDial}>
                    Dial
                </button>
            ) : (
                <button className="hangup" onClick={props.eventDial}>
                    HangUp
                </button>
            )}
        </div>
    );
};
Dial.propTypes = {
    eventDial: propTypes.func.isRequired,
    dialing: propTypes.bool.isRequired,
};

export default Dial;
