const PLAYERS_KEY = 'players';
const DEALING_PLAYER_INDEX_KEY = 'dealing-player-index';
const NUMBER_OF_ROUNDS_KEY = 'number-of-rounds';


export const setPlayers = (players: Map<string, number>) => {
	localStorage.setItem(PLAYERS_KEY, JSON.stringify([...players]));
};

export const getPlayers = (): Map<string, number> => {
	const storedPlayers = localStorage.getItem(PLAYERS_KEY);

	if (storedPlayers !== null) {
		return new Map(JSON.parse(storedPlayers)) as Map<string, number>;
	}

	return new Map();
};

export const setDealingPlayerIndex = (index: number) => {
	localStorage.setItem(DEALING_PLAYER_INDEX_KEY, index.toString());
};

export const getDealingPlayerIndex = (): number => {
	const index = localStorage.getItem(DEALING_PLAYER_INDEX_KEY);

	if (index !== null) {
		return parseInt(index);
	}

	return 0;
};

export const setNumberOfRounds = (index: number) => {
	localStorage.setItem(NUMBER_OF_ROUNDS_KEY, index.toString());
};

export const getNumberOfRounds = (): number => {
	const index = localStorage.getItem(NUMBER_OF_ROUNDS_KEY);

	if (index !== null) {
		return parseInt(index);
	}

	return 1;
};
