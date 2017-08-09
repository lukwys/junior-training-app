import React from 'react';
import { observer } from 'mobx-react';

import Input from './inputComponent';

const SelectsComponent = observer(
    class SelectsComponent extends React.Component {
        render() {
            return (
                <div className="container" data-select--container>
                    {['s1'].map((s, i) => <Input name={s} key={i}/>)}
                </div>
            );
        }
    }
);

export default SelectsComponent;
