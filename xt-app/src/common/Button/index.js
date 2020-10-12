import React, { useState } from 'react';

import './index.scss';

const Button = (props) => {

    const {value, disabled, buttonSelected} = props;

    const [selected, setSelected] = useState(buttonSelected);

    const handleClick = (e) => {
        setSelected(true);
        props.click(e.target.innerText);
    }

    return(
        <button className={`button ${selected ? 'selected' : ''}`} disabled={disabled} onClick={(e)=>handleClick(e)}>{value}</button>
    );

}

export default Button;