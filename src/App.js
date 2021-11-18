import './App.css';
import AddDeckForm from './components/addDeckForm';



import {DECK_DATA, PLAYER_DATA, GAME_DATA} from './mock-data';
import Deck from './components/Deck';
import { useState } from 'react';



function App() {
  const [decks, setDecks] = useState(DECK_DATA);
  const createDecks = (name) => { 
    const newDecks = [
      {
        name, commander:'placeholder', user:'placeholder', cards:['placeholder', 'placeholder']
      },
      ...decks,
  ];
  setDecks(newDecks)
  };
  

  return (
    <div className="App">
      <>
      { decks.map( (deck, i) =>
      <Deck key={i} name={deck.name} commander={deck.commander} user={deck.user} cards={deck.cards} />)} 
      <AddDeckForm onSaveDeck={createDecks} />
      </>
    </div>
  );
}

export default App;
