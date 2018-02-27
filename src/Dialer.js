import React, { Component } from 'react';
import './Dialer.css';
import './Dialer-responsive.css';
import PhoneNumber from './components/PhoneNumber';
import Numbers from './components/Numbers';
import Dial from './components/Dial';
import LastPhones from './components/LastPhones';

class Dialer extends Component {
    constructor() {
        super();
        this.state = {
            dialing: false,
            phoneCallFinished: false,
            inputDial: '',
            countCalls: [],
        };

        this.handleEventDial = this.handleEventDial.bind(this);
        this.handleInputDial = this.handleInputDial.bind(this);
        this.handleCounterDone = this.handleCounterDone.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleDeleteNumber = this.handleDeleteNumber.bind(this);
    }
    handleDeleteNumber() {
        this.setState({inputDial: this.state.inputDial.split('').slice(0,-1).join('')})
    }

    handleCloseModal() {
        this.setState({
            phoneCallFinished: false,
        });
    }

    handleCounterDone() {
        this.setState({
            dialing: false,
            countCalls: [...this.state.countCalls, this.state.inputDial],
            inputDial: '',
            phoneCallFinished: true,
        });
    }

    handleEventDial() {
        if (this.state.inputDial === '') {
            return;
        }
        this.setState({ dialing: !this.state.dialing });
    }

    handleInputDial(key) {
        this.setState(prevState => {
            return { inputDial: prevState.inputDial + key };
        });
    }

    render() {
        return (
            <div className="dialer">
                <PhoneNumber
                    inputDial={this.state.inputDial}
                    dialing={this.state.dialing}
                    counterDone={this.handleCounterDone}
                    deleteNumber={this.handleDeleteNumber}
                />
                {this.state.dialing ? null : (
                    <Numbers inputNr={this.handleInputDial} />
                )}
                {this.state.phoneCallFinished ? (
                    <LastPhones
                        allCalls={this.state.countCalls}
                        closeModal={this.handleCloseModal}
                    />
                ) : null}
                <Dial
                    eventDial={this.handleEventDial}
                    dialing={this.state.dialing}
                />
            </div>
        );
    }
}

export default Dialer;
