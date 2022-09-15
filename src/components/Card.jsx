import React from "react";
// import {Link} from 'react-router-dom';

export default function Card(props) {
  return (
    <div>
      {/* <Link to={ `/Player/${props.name}`} className="card"> */}
      <div className="card">
        <img src={props.img} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="">
              <path />
            </svg>
            <img className="card__thumb" src={props.profile} alt="" />
            <div className="card__header-text">
              <h3 className="card__title">📽{props.name}</h3>
              <span className="card__status">📌{props.episodes}</span>
              <br />
              <a className="textDecoration" href={props.watch}>
                ▶ Watch
              </a>
            </div>
          </div>
          <p className="card__description">{props.description}</p>
        </div>
        </div>
      {/* </Link> */}
    </div>
  );
}
