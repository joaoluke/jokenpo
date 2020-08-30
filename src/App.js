import React, { useState, useEffect } from 'react';
import './App.css';
import ScoreBoard from './components/scoreboard';
import Result from './components/result';
import ToChoose from './components/toChoose/index.jsx';


function App() {
  const [ player, setPlayer ] = useState({choice: 'Jogador'});
  const [ machine, setMachine ] = useState({choice: ''});
  const [ playsMachine, setPlaysMachine ] = useState(0);
  const [ playsPlayer, setPlaysPlayer ] = useState(0);
  
  useEffect(() => {
    if (player.choice === "Jogador"){
      return setMachine({choice: "Máquina"});
    }
    let options = ["Pedra","Papel","Tesoura"];
    setMachine({choice: options[Math.floor(Math.random() * 3)]});
  }, [player])

  useEffect(()=>{
    compaction();
  }, [machine])

  const compaction = () => {
    if (player.choice === "Pedra" && machine.choice === "Papel") {
      setPlaysMachine(playsMachine + 1)
    }
    if (player.choice === "Papel" && machine.choice === "Tesoura") {
      setPlaysMachine(playsMachine + 1)
    }
    if (player.choice === "Tesoura" && machine.choice === "Pedra") {
      setPlaysMachine(playsMachine + 1)
    }
    if (player.choice === "Pedra" && machine.choice === "Tesoura") {
      setPlaysPlayer(playsPlayer + 1)
    }
    if (player.choice === "Papel" && machine.choice === "Pedra") {
      setPlaysPlayer(playsPlayer + 1)
    }
    if (player.choice === "Tesoura" && machine.choice === "Papel") {
      setPlaysPlayer(playsPlayer + 1)
    }
  }

  return (
    <>
      <ScoreBoard 
        playsMachine={playsMachine} 
        playsPlayer={playsPlayer}
      />
      { playsPlayer - playsMachine === 1
        ? 
        <>
            <h1 className="congratulations">Voce Ganhou</h1>
            <button 
              className="reset"
              onClick={() => {
                setPlayer({choice: "Jogador"})
                setMachine({choice: "Máquina"})
                setPlaysMachine(0)
                setPlaysPlayer(0)
              }}
            > 
            Restart
            </button>
          </>
        : 
        <Result 
          player={player} 
          machine={machine}
        /> 
      }
      
      <ToChoose 
        setPlayer={setPlayer} 
      />
      <p className="msg-finalized">*O jogo só irá acabar quando você tiver 4 pontos de vantagem pra Máquina </p>
    </>
    
  );
}

export default App;
