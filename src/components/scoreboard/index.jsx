import './style.css';
import React from 'react';

function ScoreBoard (props) {
    return(
        <div className="score">
            <p>Placar</p>
            <div className="container">
                <div className="player">
                <h1>{props.playsPlayer}</h1>
                    <h6>Jogador</h6>
                </div>
                <div className="machine">
                    <h1>{props.playsMachine}</h1>
                    <h6>Máquina</h6>
                </div>
            </div>
        </div>
    );
}

export default ScoreBoard;