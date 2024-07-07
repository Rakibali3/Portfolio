import React from 'react';
import Cards1 from './Cards1';
import Intro from './Intro';

const Body = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <div>
                <Cards1 />
            </div>
            <div>
                <Intro />
            </div>
        </div>
    );
};

export default Body;
