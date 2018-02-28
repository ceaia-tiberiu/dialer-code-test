import React, { Component } from 'react';
import propTypes from 'prop-types';

/**
 * Shows the number pad that is used to call a phone number
 * the numbers work from keyboard also too. except * and # (wokr in progress for that)
 */
class Numbers extends Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleMouseDownEvent = this.handleMouseDownEvent.bind(this);
    }

    /**
     * Check if the keypress is a number and adds it to the phone number.
     * @param {object} event
     */
    onKeyDown(event) {
        let key = event.keyCode;
        key = String.fromCharCode(key);
        var reg = /[0-9]|\*/;
        if (reg.test(key)) {
            this.props.inputNr(key);
        }
        return;
    }
    /**
     * Adds zpressed` event class to the specific number
     * @param {object} event
     */
    handleMouseDownEvent(event) {
        let key = event.currentTarget.innerHTML;
        event.currentTarget.classList.add('pressed');
        this.props.inputNr(key);
    }
    /**
     * Removes the `pressed` event class after 300 ms
     * @param {object} event
     */
    handleMouseUpEvent(event) {
        let element = event.currentTarget;
        setTimeout(function() {
            element.classList.remove('pressed');
        }, 300);
    }

    componentWillMount() {
        document.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    render() {
        return (
            <div className="numbers-container">
                <div className="nr-row">
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        1
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        2
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        3
                    </div>
                </div>
                <div className="nr-row">
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        4
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        5
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        6
                    </div>
                </div>
                <div className="nr-row">
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        7
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        8
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        9
                    </div>
                </div>
                <div className="nr-row">
                    <div
                        className="letterSpace"
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        *
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        0
                    </div>
                    <div
                        onMouseDown={this.handleMouseDownEvent}
                        onMouseUp={this.handleMouseUpEvent}
                    >
                        #
                    </div>
                </div>
            </div>
        );
    }
}

Numbers.propTypes = {
    inputNr: propTypes.func.isRequired,
};

export default Numbers;
