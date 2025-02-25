import 'react';

const Card = (props) => {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>{props.label}</button>
        </>
    );
};

export default Card;