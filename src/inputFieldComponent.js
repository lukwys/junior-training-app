import React from 'react';
import './css/inputField.scss';

export default function InputFieldComponent(props) {
    return (
        <input placeholder={props.name} disabled/>
    );
}
