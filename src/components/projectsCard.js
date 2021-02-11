import React from "react";

function Card(props) {
    return <div className="card text-center float-left m-3">
            <img className="portimage" src={process.env.PUBLIC_URL + props.image} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                        <a href={props.live}>Live App!</a>
                        <br />
                        <a href={props.repo} className="card-text">gitHub repository</a>
                </div>
        </div>
}

export default Card;