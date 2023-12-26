export const setPlayers = (players: Map<string, number>) => {
};

export const getPlayers = (): Map<string, number> => {
	const dummyPlayersMap = new Map();
	dummyPlayersMap.set('Test player 1', 0);
	dummyPlayersMap.set('Test player 2', 0);
	return dummyPlayersMap;
};

export const setDealingPlayerIndex = (index: number) => {
};

export const getDealingPlayerIndex = (): number => {
	return 0;
};

export const setNumberOfRounds = (index: number) => {
};

export const getNumberOfRounds = (): number => {
	return 1;
};
