import React from 'react';
import propTypes from 'prop-types';

/**
 * Shows top 3 calls made and total number of calls made
 * @param {*} props
 */
const LastPhones = props => {
    /**
     * arrange in an object all the phone numbers and the total number of calls for each number
     */
    let countCalls = props.allCalls.reduce(
        (a, b) => Object.assign(a, { [b]: (a[b] || 0) + 1 }),
        {},
    );
    /**
     * Sorts into an array the phone numbers who were called the most. Phone number are sorted alphabetically and by count
     */
    let sortedCalls = Object.keys(countCalls).sort(
        (a, b) => countCalls[b] - countCalls[a],
    );
    return (
        <div className="last-phones-modal">
            <div className="totalNo">
                Total Number of calls you made: {props.allCalls.length}
            </div>
            <p>The 3 most called numbers:</p>
            <ul>
                {sortedCalls.map((val, index) => {
                    if (index < 3) {
                        return (
                            <li key={index}>
                                {val} ( {countCalls[sortedCalls[index]]} )
                            </li>
                        );
                    } else {
                        return null;
                    }
                })}
            </ul>
            <button className="dial" onClick={props.closeModal}>
                Ok
            </button>
        </div>
    );
};

LastPhones.propTypes = {
    closeModal: propTypes.func,
    allCalls: propTypes.array,
};

export default LastPhones;
