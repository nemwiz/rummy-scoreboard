import { cleanup, render, screen } from '@testing-library/svelte';
import GameInfo from './game-info.svelte';

describe('game-info component', () => {

	afterEach(() => cleanup());

	it('shows the current round and the name of the player who deals the cards', () => {
		const dummyRound = 12;
		const dummyDealer = 'Test';

		render<GameInfo>(GameInfo, { currentRound: dummyRound, dealer: dummyDealer });

		const currentRound = screen.getByTestId('currentRound');
		const dealer = screen.getByTestId('dealer');

		expect(currentRound.textContent).toContain(dummyRound);
		expect(dealer.textContent).toContain(dummyDealer);
	});
});