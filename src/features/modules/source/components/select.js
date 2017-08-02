// eslint-disable-next-line
import React from 'react';
/**
 * function that returns array of
 * @param {array} inputs array of strings
 * @param {string} template strings witch HTML tags
 * @return array
 */

export default function SourceSelect(inputs) {
    return (
        <div>
            {inputs.map(value =>
                <div className='item'>
                    <input placeholder={value.input} disabled='true' />
                    <div className={`dropdown-${value.id}`}></div>
                    <div className='arrow' data-select--list={`dropdown-${value.id}`}>&#9662;</div>
                </div>
            )}
        </div>
    );
}
