import React from 'react';

import InputDataList from './inputDataListComponent';
import InputFancyField from './inputFancyFieldComponent';

export default function InputComponent(props) {
    return (
        <div data-name={props.name}>
            <InputFancyField />
            <InputDataList />
        </div>
    );
}
