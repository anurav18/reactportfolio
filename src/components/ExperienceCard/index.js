import React from "react";

const styles = {
    card: {
      width: "100%",
      margin:"30px",
      backgroundColor: "rgba(247, 202, 24, 0.25)"
    }
  };
function ExperienceCard(props)
{
    return(
<div class="card" style={styles.card}>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.description}</p>
  </div>
</div>
    );

}

export default ExperienceCard;