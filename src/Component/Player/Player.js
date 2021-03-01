import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const Player = (props) => {
    const { name, country, role, salary, id } = props.player;
    const img = '/Image/' + id + '.jpg';

    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className="player">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{country}</p>
            <p>{role}</p>
            <p>Salary: <FontAwesomeIcon icon={faDollarSign} /> {salary}</p>
            <button className="btn btn-success" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
        </div>
    );
};

export default Player;