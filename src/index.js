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
    4: {
        "name": "The Empress",
        "desc": "Example description",
    },
    5: {
        "name": "The Emperor",
        "desc": "Example description",
    },
}

let gameState = {
    currentTeam: 0,
    cardState: []
}

let currentCard = null;

let availableCards = Object.keys(cards);

const updateAvailableCards = () => {
    // Filter out any cards that have their index in the cardState.
    const state = gameState.cardState;
    const cardStateIndexes = state.map((card) => card.i.toString());
    // Fitler out any cards that have been picked.
    availableCards = availableCards.filter((card) => !cardStateIndexes.includes(card));
}

const pickRandomCard = () => {
    console.log('pickRandom');
    const numCards = availableCards.length;
    const getCardId = () => {
        // Pick a random available card.
        const randomIndex = Math.floor(Math.random() * numCards);
        const cardId = availableCards[randomIndex];
        return cardId;
    }

    const chosenCardId = getCardId();
    currentCard = chosenCardId;
    return cards[chosenCardId];
}

const updateCardState = (i, t) => {
    gameState.cardState.push({
        i,
        t
    });
}


// Store gamestate in the URL.
const storeGameState = (gameState) => {
    const encodedGameState = btoa(JSON.stringify(gameState));
    const url = new URL(window.location.href);
    url.searchParams.set('gData', encodedGameState);
    window.history.pushState({}, '', url);
}

const getGameState = () => {
    const url = new URL(window.location.href);
    const encodedGameState = url.searchParams.get('gData');
    if (encodedGameState) {
        return JSON.parse(atob(encodedGameState));
    }
    return null;
}

const updateGameStateOnLoad = () => {
    const newState = getGameState();
    if (newState) {
        gameState = newState;
        updateAvailableCards();
        console.log('game state loaded', gameState);
    }
}

updateGameStateOnLoad();

const copyUrlToClipboard = () => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url.href);
}

// Just a lil test.
const dummyTest = () => {
    updateCardState(1, 0);
    updateCardState(2, 0);
    updateCardState(3, 0);
    updateAvailableCards();
    storeGameState(gameState);
}

const updateTeamCounts = () => {
    const teamCounts = [0, 0, 0];
    gameState.cardState.forEach((card) => {
        teamCounts[card.t] += 1;
    });
}

updateTeamCounts();

const successBtn = document.querySelector('button.success');
const skipBtn = document.querySelector('button.skip');

const initialSetup = () => {
    const cardName = document.querySelector('.card-name');
    const cardDesc = document.querySelector('.card-desc');
    const card = pickRandomCard();
    if (availableCards.length < 1) {
        // Game over.
        cardName.innerHTML = 'Round Over';
        cardDesc.innerHTML = 'No more cards available';
        return;
    }
    if (!card) {
        return;
    }
    cardName.innerHTML = card.name;
    cardDesc.innerHTML = card.desc;
}

successBtn.addEventListener('click', () => {

    updateCardState(currentCard, gameState.currentTeam);
    updateAvailableCards();
    console.log(availableCards);

    if (availableCards.length < 1) {
        // Game over.
        const cardName = document.querySelector('.card-name');
        const cardDesc = document.querySelector('.card-desc');
        cardName.innerHTML = 'Round Over';
        cardDesc.innerHTML = 'No more cards available';
        return;
    }

    // New card

    const card = pickRandomCard();
    const cardName = document.querySelector('.card-name');
    const cardDesc = document.querySelector('.card-desc');
    cardName.innerHTML = card.name;
    cardDesc.innerHTML = card.desc;
});

skipBtn.addEventListener('click', () => {
    if (availableCards.length < 2) { 
        return; }
    const card = pickRandomCard();
    const cardName = document.querySelector('.card-name');
    const cardDesc = document.querySelector('.card-desc');
    cardName.innerHTML = card.name;
    cardDesc.innerHTML = card.desc;
});

initialSetup();