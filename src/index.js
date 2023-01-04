console.log("Congratulations!");

const cards = {
    1: {
        "name": "Rickrolling",
        "desc": "An internet goof where a person posts a link they claim to be relevant, but instead directs to a vide of Rick Astley’s 1987 pop song, “Never Gonna Give You Up.” To date, the original video has been viewed 77 million times. ",
    },
    2: {
        "name": "Oscar the Grouch",
        "desc": "An angry green man who lives I the garbage. Loves his life in the trash on Sesame Street.",
    },
    3: {
        "name": "The Dougie",
        "desc": "A dance move popularized by Cali Swag District in their song teaching you how to do it. ",
    },
    4: {
        "name": "The Transportation Security Administration (TSA)",
        "desc": "The branch of the US government that controls safety in airports. ",
    },
    5: {
        "name": "Objection!",
        "desc": "What a lawyer says “dramatically” to a judge, when they want to formally protest an issue in court. This is frequently said after the opposing council asks a question of a witness. ",
    },
    6: {
        "name": "Black Panther",
        "desc": "The superhero identity of T’Challa, king of the fictional country of Wakanda. The feline identity is based down by rulers of the country and follows a strict selection process. ",
    },
    7: {
        "name": "Cruella de Vil",
        "desc": "The extremely mean villain from the Disney animated movie 101 Dalmatians. ",
    },
    8: {
        "name": "Yodeling",
        "desc": "A type of singing where you change pitch repeatedly from very low to very high. It is usually associated with lederhosen-wearing Alpine mountain climbers, since natural settings with strong echoes offer an ideal place for a performance.",
    },
    9: {
        "name": "Clippy",
        "desc": "The nickname of the Office\nAssistant in Microsoft Office, who\nappears as the metal object used to\nhold sheets of paper together. He\nwould \"tap\" on the monitor to get your attention.",
    },
    10: {
        "name": "Star Wars Kid",
        "desc": "The star of a viral video that shows a high school student Imitating lightsaber moves using a golf ball retriever. The tape leaked online after being left in the basement of his school, leading to dozens of remixes featuring music and advanced special effects.",
    },
    11: {
        "name": "MySpace Tom",
        "desc": "Cofounder of the world's most popular social networking sitebefore Facebook. He became instantly recognizable because all users who joined the site would automatically \"friend\" him. He sold the site for $580M to Rupert Murdoch's News Corporation.",
    },
    12: {
        "name": "A Werewolf",
        "desc": "A human who transforms into a hirsute, bloodthirsty creature. Known as lycanthropy, this change is often triggered by a full moon. Suspected lycanthropes were persecuted in early modern Europe, and are now a staple figure in pop culture and party games.",
    },
    13: {
        "name": "Florida man",
        "desc": "The combined exploits of folks from the Sunshine State, collected in a popular Twitter profile. Examples include someone who \"Disguises Himself As 'The Sun: Steals Logo Towel\" and someone who \"Accidentally Shoots Himself While Celebrating New Year's Eve.",
    },
    14: {
        "name": "Moshing",
        "desc": "A dance style associated with the punk music scene, where performers aggressively slam against one another. While this dance can be done solo, it is most often performed in a “pit” alongside others. ",
    },
    15: {
        "name": "Kidz Bop",
        "desc": "A series of albums that feature children singing pop songs. Hilariously, the more risque lyrics are changed. ",
    },
    16: {
        "name": "A monster truck",
        "desc": "A specialized vehicle with a heavy duty suspensions, four-wheel steering, and oversized tires constructed for competition and entertainment uses. They usually have names like grave Digger, Batman, Bigfoot, and El Toro Loco. ",
    },
    17: {
        "name": "A Oujia board",
        "desc": "A device used by Spiritualists and, eventually, teens. Marked with the letters, numbers, and the words “yes” and “no,” these are used to spell out messages from the beyond. Its name is now a trademark of Hasbro.",
    },
    18: {
        "name": "A gif",
        "desc": "A looping image that people use to display short videos on the internet. Pronounced with a hard G, obviously. ",
    },
    19: {
        "name": "Kung Fu Panda",
        "desc": "The eponymous star of a 2008 animated movie about a large black and white bearlike mammal who performs martial arts. In the film, the protagonist Po, voiced by Jack Black, works to defat the evil Tai Lung. ",
    },
    20: {
        "name": "Dr. Phill",
        "desc": "The Oprah-endorsed TY psychologist who offers homespun wisdom like “Sometimes you make he right decision, sometimes you make the decision right.”",
    },
    21: {
        "name": "Dance Dance Revolution ",
        "desc": "A rhythm arcade game created in 1998. Players stand on a platform and hit colored arrows laid out in a cross, in time to the beat of different songs. At its highest level, it becomes a substantial aerobic workout. ",
    },
    22: {
        "name": "OK Boomer",
        "desc": "The retort of Gen Z to the generation born roughly between 1946 and 1965. Usually said in response to accusations that younger generations eat too many avocados, dye their hair, and are on their phones too much.",
    },
    23: {
        "name": "Baby Yoda",
        "desc": "Describe this adorable little child yourself, you can.",
    },
    24: {
        "name": "Hagrid",
        "desc": "The half-giant from the Harry Potter series. Apart from his role as gamekeeper of Hogwarts, he was tasked with reintroducing Harry Potter to the wizarding world, leading to the iconic line, “Yer a wizard, ‘arry!”",
    },
    25: {
        "name": "Voguing",
        "desc": "A dance that originated I the 1980s ballroom and drag scene, where the performer shifts between angular model-like poses. It was popularized by the documentary Paris is Burning as well as Madonna in the song with the same name. ",
    },
}

let gameState = {
    currentTeam: 1,
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
    const numCards = availableCards.length;
    const getCardId = () => {
        // Pick a random available card.
        const randomIndex = Math.floor(Math.random() * numCards);
        const cardId = availableCards[randomIndex];
        return cardId;
    }

    let chosenCardId = getCardId();

    // Make sure we don't pick the same card twice in a row on skips.
    for (let i = 0; i < numCards; i++) {
        if (chosenCardId === currentCard) {
            chosenCardId = getCardId();
        } else {
            break;
        }
    }

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

const teamSelect = document.querySelector('.team-select form');

const updateTeamSelectOnLoad = () => {
    teamSelect.querySelector(`input[value="${gameState.currentTeam}"]`).checked = true;
}

updateTeamSelectOnLoad();

teamSelect.addEventListener('change', (e) => {
    console.log('team changed', e.target.value);
    gameState.currentTeam = parseInt(e.target.value);
    console.log('game state', gameState);
    storeGameState(gameState);
});


const updateTeamCounts = () => {
    const teamCounts = [0, 0];
    gameState.cardState.forEach((card) => {
        if (card.t === 1) {
            teamCounts[0]++;
        }
        if (card.t === 2) {
            teamCounts[1]++;
        }
    });
    console.log('team counts', teamCounts);

    const teamCounters = document.querySelectorAll('.score-display');
    teamCounters.forEach((counter, i) => {
        counter.innerHTML = teamCounts[i];
    });
}

updateTeamCounts();

const successBtn = document.querySelector('button.success');
const skipBtn = document.querySelector('button.skip');
const resetBtn = document.querySelector('button.reset');

const initialSetup = () => {
    const cardName = document.querySelector('.card-name');
    const cardDesc = document.querySelector('.card-desc');
    const card = pickRandomCard();
    if (availableCards.length < 1) {
        // Game over.
        cardName.innerHTML = 'Round Over';
        cardDesc.innerHTML = 'No more cards available';
        successBtn.disabled = true;
        skipBtn.disabled = true;
        return;
    }
    if (!card) {
        return;
    }
    cardName.innerHTML = card.name;
    cardDesc.innerHTML = card.desc;
}

const revealCards = () => {
    const cardBox = document.querySelector('.cardbox');
    cardBox.classList.add('cardbox--reveal');
}

const flipAndUpdateCard = (name, desc) => {
    const cardBox = document.querySelector('.cardbox');
    cardBox.classList.add('cardbox--flip');
    
    const cardName = document.querySelector('.card-name');
    const cardDesc = document.querySelector('.card-desc');

    successBtn.disabled = true;
    skipBtn.disabled = true;
    
    setTimeout(() => {
        cardName.innerHTML = name;
        cardDesc.innerHTML = desc;
    }
    , 350);

    setTimeout(() => {
        cardBox.classList.remove('cardbox--flip');
        successBtn.disabled = false;
        skipBtn.disabled = false;
    }
    , 600);

};


successBtn.addEventListener('click', () => {

    updateCardState(currentCard, gameState.currentTeam);
    updateAvailableCards();
    console.log(availableCards);
    storeGameState(gameState);

    // Update team counts.
    updateTeamCounts();

    if (availableCards.length < 1) {
        // Game over.
        const cardName = document.querySelector('.card-name');
        const cardDesc = document.querySelector('.card-desc');
        cardName.innerHTML = 'Round Over';
        cardDesc.innerHTML = 'No more cards available';
        successBtn.disabled = true;
        skipBtn.disabled = true;
        return;
    }
    
    // New card

    const card = pickRandomCard();
    
    flipAndUpdateCard(card.name, card.desc);
});

skipBtn.addEventListener('click', () => {
    if (availableCards.length < 2) { 
        return; }
    const card = pickRandomCard();
    
    flipAndUpdateCard(card.name, card.desc);
});

initialSetup();

resetBtn.addEventListener('click', () => {
    // Reset the game. Clear URL params.
    const url = new URL(window.location.href);
    url.searchParams.delete('gData');
    window.history.pushState({}, '', url);
    window.location.reload();
}   );

const timer = document.querySelector('.timer');
const timerBtn = document.querySelector('.timer-btn');
const timeDisplay = document.querySelector('.time-display');
const timeOverMessage = document.querySelector('.time-over-message');

// Countdown from 1 minute.
let timeLeft = 60;

const updateTimer = () => {
    timeDisplay.innerHTML = timeLeft;
}

const startTimer = () => {
    timerBtn.disabled = true;
    const interval = setInterval(() => {
        timeLeft -= 1;
        updateTimer();
        if (timeLeft < 1) {
            clearInterval(interval);
            successBtn.disabled = true;
            skipBtn.disabled = true;
            timeOverMessage.classList.add('time-over-message--reveal');
        }
    }, 1000);
}

timerBtn.addEventListener('click', () => {
    startTimer();
    revealCards();
}
);

const copyBtn = document.querySelector('button.copy');

copyBtn.addEventListener('click', () => {
    copyUrlToClipboard();
}
);