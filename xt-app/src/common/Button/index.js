import React from 'react';

import './index.scss';

const Button = (props) => {

    const {value, disabled} = props;

    const handleClick = (e) => {
        props.click(e.target.innerText);
    }

    return(
        <button className="button" disabled={disabled} onClick={(e)=>handleClick(e)}>{value}</button>
    );

}

export default Button;