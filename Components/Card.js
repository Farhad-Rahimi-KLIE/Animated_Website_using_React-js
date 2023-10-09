import React from 'react'
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div className="my-5">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                      Some example text. Some example text.
                    </p>
                    <Link to="#" className="card-link">
                      Card link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Card
