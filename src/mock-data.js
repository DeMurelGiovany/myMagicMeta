const DECK_DATA = [{
        name: 'Varina',
        commander: 'Varina, Lich Queen',
        user: 'Gigi',
        cards: [
            'Varina, Lich Queen',
            'Anguished Unmaking',
            'Snow-Covered Swamp',
            'Snow-Covered Swamp',
            'Snow-Covered Swamp',
            'Snow-Covered Swamp',
            'Snow-Covered Swamp',
            // array want objects zijn geen valid react children
            // {cardname: 'Varina, Lich Queen', cardtype: 'Creature'},
            // {cardname: 'Anguished Unmaking', cardtype: 'Instant'},
        ]
    },
    {
        name: 'Mimeoplasm',
        commander: 'The Mimeoplasm',
        user: 'Gigi',
        cards: [
            'The Mimeoplasm',
            'Urban Evolution'
            // {cardname: 'The Mimeoplasm', cardtype: 'Creature'},
            // {cardname: 'Urban Evolution', cardtype: 'Sorcery'},
        ]
    },
    {
        name: 'Codie',
        commander: 'Codie, Vociferous Codex',
        user: 'Sil',
        cards: [
            'Codie, Vociferous Codex',
            'Nissa, Who Shakes the World'
            // {cardname: 'Codie, Vociferous Codex', cardtype: 'Creature'},
            // {cardname: 'Nissa, Who Shakes the World', cardtype: 'Planeswalker'},
        ]
    },


];

const PLAYER_DATA = [{
        name: 'Gigi',
        decks: [
            DECK_DATA[0],
            DECK_DATA[1],

        ]
    },
    {
        name: 'Sil',
        decks: [
            DECK_DATA[3],
        ]
    },
];

const GAME_DATA = [{
        date: '2021-10-14T12:32:04.534Z',
        players: ['Gigi', 'Sil'],
        decks: ['Varina', 'Codie'],
        winner: 'Sil'

    },
    {
        date: '2021-10-14T14:00:00.534Z',
        players: ['Gigi', 'Sil'],
        decks: ['Varina', 'Codie'],
        winner: 'Gigi'
    },
    {
        date: '2021-11-13T12:24:04.534Z',
        players: ['Gigi', 'Sil'],
        decks: ['Varina', 'Codie'],
        winner: 'Sil'
    }
];

export {
    DECK_DATA,
    PLAYER_DATA,
    GAME_DATA
};