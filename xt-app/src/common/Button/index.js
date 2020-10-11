import React from 'react';

import './index.scss';

const Button = (props) => {

    const {value} = props;

    const handleClick = (e) => {
        props.click(e.target.innerText);
    }

    return(
        <button className="button" onClick={(e)=>handleClick(e)}>{value}</button>
    );

}

export default Button;