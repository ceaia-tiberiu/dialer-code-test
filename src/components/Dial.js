import React, { Component } from 'react';

class Dial extends Component {
    render() {
        return (
            <div className="dial-container">
                {!this.props.dialing ? (
                    <button className="dial" onClick={this.props.eventDial}>
                        Dial
                    </button>
                ) : (
                    <button className="hangup" onClick={this.props.eventDial}>
                        HangUp
                    </button>
                )}
            </div>
        );
    }
}

export default Dial;
