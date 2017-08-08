import React from 'react';

import Input from './inputComponent';

export default function SelectsComponent(props) {
    return (
        <div>
            {['s1', 's2', 's3'].map((s, i) => <Input name={s} key={i}/>)}
        </div>
    );
}
