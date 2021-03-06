import React, { Component } from 'react';
import propTypes from 'prop-types';

/**
 * Counts the total number of seconds when dialing
 */
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: '00',
        };
        this.time = null;
    }
    componentDidMount() {
        let sec = 0;
        this.time = setInterval(() => {
            sec++;
            if (sec < 11) {
                this.setState({ timer: sec === 10 ? '10' : '0' + sec });
            } else {
                clearInterval(this.time);
                this.props.counterDone();
            }
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.time);
    }
    render() {
        return (
            <div className="phone-timer">{`Call Time: 00:00:${
                this.state.timer
            }`}</div>
        );
    }
}

Counter.propTypes = {
    counterDone: propTypes.func.isRequired,
};

export default Counter;
