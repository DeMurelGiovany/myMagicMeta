import './App.css';
import AddDeckForm from './components/addDeckForm';



import {DECK_DATA, PLAYER_DATA, GAME_DATA} from './mock-data';
import Deck from './components/Deck';

function App() {
  
  return (
    <div className="App">
      <>
      { DECK_DATA.map( (deck, i) =>
      <Deck key={i} name={deck.name} commander={deck.commander} user={deck.user} cards={deck.cards} />)} 
      <AddDeckForm />
      </>
    </div>
  );
}

export default App;
