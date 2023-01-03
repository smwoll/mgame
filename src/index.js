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
}

let gameState = {
    currentTeam: 0,
    cardState: []
}

let availableCards = Object.keys(cards).filter((cardId) => {
    return !gameState.cardState.find((card) => {
        return card.index === cardId;
    });
});

console.log(availableCards );

console.log('init game state', gameState);

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

console.log(pickRandomCard());