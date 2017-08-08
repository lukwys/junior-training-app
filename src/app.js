import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.scss';

// import source from './features/modules/source';
// import handler from './handler';
// import './css/style.scss';
// import Select from './features/modules/select/components/select';
/**
 * Bootstrapping application
 */
function bootstrap() {
    console.log('~ Bootstrapping App');

    // console.log('~ Init select');
    // source.bootstrap();
    //
    // console.log('~ Init drop-down menu');
    // handler.dropDown();

    function Source(props) {
        return <hr />;
    }

    function InputFancyField(props) {
        return <input />;
    }

    function InputDataList(props) {
        return <ul />;
    }

    function Input(props) {
        return (
            <div>
                <InputFancyField />
                <InputDataList />
            </div>
        );
    }

    function Selects(props) {
        return (
            <div>
                {['s1', 's2', 's3'].map(s => <Input name={s} />)}
            </div>
        );
    }

    function Results(props) {
        return <hr />;
    }

    function App(props) {
        return (
            <div>
                <Source />
                <Selects />
                <Results />
            </div>
        );
    }

    const appDock = document.createElement('div');
    document.body.appendChild(appDock);

    ReactDOM.render(<App />, appDock);
}

bootstrap();
