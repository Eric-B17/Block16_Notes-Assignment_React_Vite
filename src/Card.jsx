import 'react';

const Card = (props) => {
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <h1>{props.title}</h1>
            <p>{}</p>
            <button>{}</button>
        </>
    );
};

export default Card;