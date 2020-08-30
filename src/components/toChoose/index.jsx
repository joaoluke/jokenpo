import './style.css';
import React from 'react';

function ToChoose (props) {
    return(
        <div>
            <div className="plays">
                <button onClick={() => {props.setPlayer({choice: "Pedra"})}}>Pedra</button>
                <button onClick={() => {props.setPlayer({choice: "Papel"})}}>Papel</button>
                <button onClick={() => {props.setPlayer({choice: "Tesoura"})}}>Tesoura</button>
            </div>
        </div>
    );
}

export default ToChoose;