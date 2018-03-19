import React from 'react';
import {Link} from 'react-router-dom';


const PortfolioPage = (props) => (
    <div>
        <h1>My Work</h1>
        <p>Checkout the stuff I've done:</p>
        <button onClick={(e) => {
            console.log('sss');
            props.history.push('/');
        }}>test
        </button>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
    </div>
);


export default PortfolioPage;
