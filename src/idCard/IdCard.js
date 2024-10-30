import React from "react";
import './idCard.css';

function IdCard(props) {
    console.log(props);

    return(
        <div className='idCard'>
        <picture><img src={props.picture} alt="profile picture"/></picture>

    <ul >
        <li><b>First name: </b>{props.lastName}</li>
        <li><b>Last Name: </b>{props.firstName}</li>
        <li><b>Gender: </b>{props.gender}</li>
        <li><b>Height: </b>{props.height}m</li>
        <li><b>Birth: </b>{(props.birth).toDateString()}</li>
    </ul>
    </div>
    );
}

export default IdCard;

// import React from 'react'
// function IdCard(props) {
//     console.log(props);
    
//   return (
//     <div>
//         <ul>
//             <li>Firstname: {props.firstName}</li>
//             <li>Last Name: {props.lastName}</li>
            
//         </ul>
//     </div>
//   )
// }
// export default IdCard