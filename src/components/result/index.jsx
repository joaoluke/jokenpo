import './style.css';
import React from 'react';

function Result (props) {
    return(
        <div className="result">
            <div className="machine-result">
                <h1>{props.machine.choice}</h1>
                <p className="left">Maquina</p>
            </div>
            <hr/>
            <div className="player-result">
                <p className="left">Jogador</p>
                <h1>{props.player.choice}</h1>
            </div>
        </div>
    );
}

export default Result;