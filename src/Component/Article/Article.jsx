import React from 'react';
import './Article.css';


const Article = (props) => {
    return (
        <div className="card">
        <img src={props.img} alt="Avatar" />
        <div className="container">
          <h4 className="title">{props.name}</h4>
          <h5 className="desc">{props.desc}</h5>
          <b className="harga">{props.harga}</b>
          <a href="#" class="btn btn-danger">Add</a>
        </div>
      </div> 
    )
    
}

export default Article