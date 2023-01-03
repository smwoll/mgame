console.log("Congratulations!");

const cards = {
    1: {
        "name": "The Fool",
        "desc": "Example description",
    },
    2: {
        "name": "The Magician",
        "desc": "Example description",
    },
    3: {
        "name": "The High Priestess",
        "desc": "Example description",
    },
}

let gameState = {
    currentTeam: 0,
    cardState: []
}

let availableCards = Object.keys(cards);

const updateAvailableCards = () => {
    // Filter out any cards that have their index in the cardState.
    const state = gameState.cardState;
    const cardStateIndexes = state.map((card) => card.index.toString());
    // Fitler out any cards that have been picked.
    availableCards = availableCards.filter((card) => !cardStateIndexes.includes(card));
}

const pickRandomCard = () => {
    const numCards = availableCards.length;
    const getCardId = () => {
        // Pick a random available card.
        const randomIndex = Math.floor(Math.random() * numCards);
        const cardId = availableCards[randomIndex];
        return cardId;
    }
    return cards[getCardId()];
}

const updateCardState = (index, team) => {
    gameState.cardState.push({
        index,
        team
    });
}

updateCardState(3, 1);
updateCardState(2, 1);


// Store gamestate in the URL.
const storeGameState = (gameState) => {
    const encodedGameState = btoa(JSON.stringify(gameState));
    const url = new URL(window.location.href);
    url.searchParams.set('gameState', encodedGameState);
    window.history.pushState({}, '', url);
}

const getGameState = () => {
    const url = new URL(window.location.href);
    const encodedGameState = url.searchParams.get('gameState');
    if (encodedGameState) {
        return JSON.parse(atob(encodedGameState));
    }
    return null;
}

const updateGameStateOnLoad = () => {
    const newState = getGameState();
    if (newState) {
        console.log('game state loaded', gameState);
        gameState = newState;
        updateAvailableCards();
    }
}

updateGameStateOnLoad();

console.log('new pick', pickRandomCard());