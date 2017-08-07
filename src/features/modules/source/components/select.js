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
            {
                inputs.map(value => {
                    const [, inAttrName, inAttrVal] = value.inAttr.match(/([\w-]+)='(\w+)'/);
                    const [, outAttrName, outAttrVal] = value.outAttr.match(/([\w-]+)='(\w+)'/);
                    const [inAttr, outAttr] = [{}, {}];

                    inAttr[inAttrName] = inAttrVal;
                    outAttr[outAttrName] = outAttrVal;

                    return <div className='item'>
                        <input placeholder={value.label} disabled='true' {...inAttr} />
                        <div className={`dropdown-${value.id} notVis`} {...outAttr}></div>
                        <div className='arrow' data-select--list={`dropdown-${value.id}`}>&#9662;</div>
                    </div>;
                }
                )}
        </div>
    );
}
