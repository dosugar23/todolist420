import React from 'react';
import './Logo.css';
import Aux from '../../../../hoc/Axu';

const logo = (props) => (
    <Aux>
        <div className="Logo" onClick={props.clickedLogo}>
            <p>TO DO LIST v0.0</p>
        </div>
    </Aux>
)

export default logo;