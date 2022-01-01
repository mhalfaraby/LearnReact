import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props)
  return <div><h1>My Contacts</h1>

  <h2>{props.name}</h2>
  <img
    src={props.img}
    alt="avatar_img"
  />
  <p>{props.name}</p>
  <p>{props.tel}</p>
</div>
}

ReactDOM.render(
  <div> 
    <Card 
    name="Beyonce" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
    tel="+123 456 789"
    email ="b@beyonce.com"
    />
    </div>
    ,
  document.getElementById("root")
);
