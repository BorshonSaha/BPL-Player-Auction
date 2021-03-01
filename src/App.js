import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import Player from './Component/Player/Player';
import playerData from './Data/playerData.json';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() =>{
    setPlayers(playerData);
  }, [])

  const [playerCart, setPlayerCart] = useState([]);

  const handleAddPlayer = (player) => {
    const newPlayerCart = [...playerCart, player];
    setPlayerCart(newPlayerCart);
  }

  return (
    <div>
      <Header></Header>
      <br/>
      <div className="player-and-cart">
        <div className="player-container">
          {
            players.map(player => <Player player={player}
              handleAddPlayer={handleAddPlayer}
              ></Player>)
          }
        </div>
        <div className="cart-container">
            <Cart playerCart={playerCart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
