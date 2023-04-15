import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div class="card">
          <img src={props.img} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.category}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} rel="noreferrer" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
