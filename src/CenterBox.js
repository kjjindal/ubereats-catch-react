import React from 'react';
import './CenterBox.css';

function CenterBox(props){
    return (
        <>
        <div className="centerbox">

        <img src={props.imgurl}  alt={props.title}    />
        <h2>  {props.title}  </h2> 
        <h3>  {props.description}  </h3> 

        </div>


        </>
    )
}

export default CenterBox