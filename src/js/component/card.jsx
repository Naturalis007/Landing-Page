import React from "react";

const Card = ({img,titulo,descripcion})=>{
    return <div className="card" style={{"width": "18rem"}}>
    <img src= {img} className="card-img-top" alt="..." height={"200"}/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
}

export default Card;