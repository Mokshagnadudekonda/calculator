import React from 'react';
import './App.css';

const Keypad = ({ handleClick, handleClear, calculate }) => {
    const keys = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '=', 'C', '+']
    ];

    return (
        <div className="keypad">
            {keys.map((row, i) => (
                <div className="row" key={i}>
                    {row.map((key) => (
                        <button
                            key={key}
                            onClick={() => {
                                if (key === 'C') handleClear();
                                else if (key === '=') calculate('=');
                                else handleClick(key);
                            }}
                            className={
                                key === '+' ? 'operator border' :
                                    key === '/' || key === '*' || key === '-' ? 'operator' :
                                        key === 'C' || key === '=' ? 'fun-keys' :
                                            key === '0' ? 'digit border1' :
                                                'digit'
                            }
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Keypad;