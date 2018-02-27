import React, { Component } from 'react';

class Numbers extends Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleMouseDownEvent = this.handleMouseDownEvent.bind(this);
    }

    onKeyDown(event) {
        let key = event.keyCode;
        key = String.fromCharCode(key);
        var reg = /[0-9]|\*/;
        if (reg.test(key)) {
            this.props.inputNr(key);
        }
        return;
    }
    onKeyUp(event) {}
    handleMouseDownEvent(event) {
        let key = event.currentTarget.innerHTML;
        event.currentTarget.classList.add('pressed');
        this.props.inputNr(key);
    }
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

export default Numbers;
