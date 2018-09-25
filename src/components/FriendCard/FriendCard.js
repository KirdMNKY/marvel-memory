import React from "react";
import "./FriendCard.css";



const FriendCard = props => (
  <div>

  <div className="card" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={() => props.resetFriends(props.id)}>

    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
        {props.name}
        </li>
      </ul>
    </div>
  </div>
  </div>
  

)
  
export default FriendCard;
