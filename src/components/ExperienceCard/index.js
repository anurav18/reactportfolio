import React from "react";

const styles = {
    card: {
      width: "16rem",
      margin:"30px",
      backgroundColor: "rgba(247, 202, 24, 0.25)"
    }
    ,
    img:{
      width:"200px",
      height:"200px"
    }
  };
function ExperienceCard(props)
{
    return(
<div style={styles.card} className="card text-center float-left m-3">
  <div class="card-body">
   <img src={process.env.PUBLIC_URL + props.image} alt={props.name} style={styles.img}></img>
  
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text"><b>{props.role}</b></p>
    <p class="card-text">{props.description}</p>
    
  </div>
</div>
    );


}

export default ExperienceCard;