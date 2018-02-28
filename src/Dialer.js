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

    /**
     * Delete last number entered for the phone number
     */
    handleDeleteNumber() {
        this.setState({
            inputDial: this.state.inputDial
                .split('')
                .slice(0, -1)
                .join(''),
        });
    }
    /**
     * Closes the info panel with total numbers of calls and top 3 numbers
     */
    handleCloseModal() {
        this.setState({
            phoneCallFinished: false,
        });
    }
    /**
     * adds the current phone number dialed to the list of all calls when the call ended
     */
    handleCounterDone() {
        this.setState({
            dialing: false,
            countCalls: [...this.state.countCalls, this.state.inputDial],
            inputDial: '',
            phoneCallFinished: true,
        });
    }
    /**
     * Handles the dial button click event. If there's no number entered, the dial button doesn't do anything.
     */
    handleEventDial() {
        if (this.state.inputDial === '') {
            return;
        }
        this.setState({ dialing: !this.state.dialing });
    }

    /**
     * Ads a number to the phone number when is pressed or when is press by keyboard
     * @param {string} key
     */
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
