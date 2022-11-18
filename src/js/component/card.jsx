import React from "react";

const Card = ({img,titulo,descripcion,color})=>{
    return <div class="card" style={{"width": "18rem"}}>
    <img src= {img} class="card-img-top" alt="..." height={"200"}/>
    <div class="card-body">
      <h5 class="card-title">{titulo}</h5>
      <p class="card-text">{descripcion}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
}

export default Card;