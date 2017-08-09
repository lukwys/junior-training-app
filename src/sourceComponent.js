import React from 'react';
import './css/source.scss';

export default function SourceComponent(props) {
    return (
        <div className="container">
            <div className="con-sel">
                <select data-select--data-source />
                <div className="arrow">&#9662;</div>
            </div>
        </div>
    );
}
