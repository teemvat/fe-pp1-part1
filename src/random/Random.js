import React from "react";
import './random.css';

function Random(props){
    return(
        <>
        <p className='random'>Random value between {props.min} and {props.max} {'=> '}
            {Math.floor(Math.random() * props.max + (props.min))}  </p>
        </>
    );
}

export default Random;