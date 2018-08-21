import React from 'react';

import Login from '../containers/login'
import Polls from '../containers/polls';

const Home = (props) => {
    return (
        <div className='home'>
            <Login />
            <Polls />
        </div>
    );
}

export default Home;