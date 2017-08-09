import React from 'react';

import Input from './inputComponent';

export default function SelectsComponent(props) {
    return (
        <div className="container" data-select--container>
            {['s1'].map((s, i) => <Input name={s} key={i}/>)}
        </div>
    );
}
