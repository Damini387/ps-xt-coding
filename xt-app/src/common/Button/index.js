import React from 'react';

import './index.scss';

const Button = (props) => {

    const {value} = props;

    return(
        <button className="button">{value}</button>
    );

}

export default Button;