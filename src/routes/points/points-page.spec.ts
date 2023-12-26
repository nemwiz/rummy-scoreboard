import { cleanup, fireEvent, screen, render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import PointsPage from './+page.svelte';

vi.mock('../../stores/game.store');
vi.mock('$app/navigation');

describe('points-page component', () => {

	afterEach(() => cleanup());

	it('shows all player names for selection and sets the winner when one of the players is selected', async () => {
		const { component } = render<PointsPage>(PointsPage);

		const playersSelection = screen.getAllByRole('button');

		expect(playersSelection.length).toEqual(2);
		expect(playersSelection[0].textContent).toContain('Test player 1');
		expect(playersSelection[1].textContent).toContain('Test player 2');

		await fireEvent.click(playersSelection[1]);

		const componentState = component.$$.hmr_cmp.$capture_state();

		expect(componentState.roundWinner).toEqual('Test player 2');
	});
	it('shows win types and calculates the score for the winner based on the win type', async () => {
		const { component } = render<PointsPage>(PointsPage);

		await fireEvent.click(screen.getAllByRole('button')[0]);

		const winTypeSelection = screen.getAllByRole('button');
		expect(winTypeSelection.length).toEqual(3);

		await fireEvent.click(winTypeSelection[0]);

		let componentState = component.$$.hmr_cmp.$capture_state();

		expect(componentState.currentPlayers.get('Test player 1')).toEqual(-40);
		expect(componentState.currentPlayers.get('Test player 2')).toEqual(0);

		await userEvent.type(screen.getByTestId('playerScore'), '15');
		await fireEvent.click(screen.getByRole('button'));

		componentState = component.$$.hmr_cmp.$capture_state();

		expect(componentState.currentPlayers.get('Test player 2')).toEqual(15);
	});
});