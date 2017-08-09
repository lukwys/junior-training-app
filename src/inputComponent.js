import React from 'react';
import './css/input.scss';

import InputField from './inputFieldComponent';
import InputDataList from './inputDataListComponent';

export default function InputComponent(props) {
    return (
        <div className="item">
            <InputField name={props.name}/>
            <InputDataList name={props.name}/>
            <div className="arrow" data-select--list={`dropdown-${props.name}`}>&#9662;</div>
        </div>
    );
}
