import React from 'react';

const Button = (props: any) => {
    return (
        <button className="qc-button">
            {props.title}
        </button>
    )
}

export default Button;