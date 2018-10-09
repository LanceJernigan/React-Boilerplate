import React from 'react';

import { style as PageStyle } from './style';

import HelloWorldComponent from '../../components/HelloWorld';

const HelloWorld = () => (
    <div
        className={PageStyle}
    >
        <HelloWorldComponent />
    </div>
);

export default HelloWorld;