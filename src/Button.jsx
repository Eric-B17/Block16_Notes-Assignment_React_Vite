import 'react';

const Button = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <button onClick={props.onClick}>
            {/* eslint-disable-next-line react/prop-types */}
            {props.label}
        </button>
    );
};

export default Button;