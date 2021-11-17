//[DECK_DATA, PLAYER_DATA, GAME_DATA]

export default function Deck(props) {
    const {name, commander, user, cards} = props;
    return <div className="bg-green-100 hover:bg-green-200">
        Deck: {name} Commander: {commander} user: {user} cards: {cards}
        </div>
}