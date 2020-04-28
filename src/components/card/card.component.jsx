import React from 'react';
import './card.component.css';


export const Card = (props) => {
    return (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set3`}></img>
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>

        </div>
    );
}