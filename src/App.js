import './App.css';

import {DECK_DATA, PLAYER_DATA, GAME_DATA} from './mock-data';
import Deck from './components/Deck';

function App() {
  
  return (
    <div className="App">
      { DECK_DATA.map( deck =>
      <Deck name={deck.name} commander={deck.commander} user={deck.user} cards={deck.cards} />)} 
     
    </div>
  );
}

export default App;
