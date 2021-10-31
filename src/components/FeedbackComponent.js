import React from "react";
import "./FeedbackComponent.css"

function FeedbackComponent(props){
    return(
        <>
        <div id="feedBacksContainer">
            <h2>Name : {props.name} | Departement : {props.departement} | Rating : {props.rating} </h2>
            <button className="btnDelete" onClick={props.delete}>Delete</button>
        </div>
        </>
    )
}
export default FeedbackComponent;