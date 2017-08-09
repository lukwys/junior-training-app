import React from 'react';
import { observer } from 'mobx-react';
import './css/inputDataList.scss';

const InputDataListComponent = observer(
    class InputDataListComponent extends React.Component {
        render() {
            return <ul className="dropdown"/>;
        }
    }
);

export default InputDataListComponent;
