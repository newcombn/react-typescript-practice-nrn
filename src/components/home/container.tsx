import React from 'react';
import Main from './main';
import Aside from '../wrapper/aside';

function Container() {
    return (
        <div className="container">
            <Main />
            <Aside />
        </div>
    )
}

export default Container;