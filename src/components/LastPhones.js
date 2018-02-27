import React from 'react';

const LastPhones = props => {
    let countCalls = props.allCalls.reduce(
        (a, b) => Object.assign(a, { [b]: (a[b] || 0) + 1 }),
        {},
    );

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

export default LastPhones;
