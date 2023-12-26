<script lang="ts">
	import 'cirrus-ui';
	import {
		getDealingPlayerIndex,
		getNumberOfRounds,
		getPlayers,
		setDealingPlayerIndex, setNumberOfRounds,
		setPlayers
	} from '../../stores/game.store';
	import { PointCollectionProcessStep } from '../../model/point-collection-process-step';
	import { RoundWinType } from '../../model/round-win-type';
	import { calculatePointsBasedOnWinType } from '../../service/points.service';
	import { goto } from '$app/navigation';

	const ROUND_WIN_TYPES = [
		{ type: RoundWinType.NORMAL, text: 'Normalno' },
		{ type: RoundWinType.CLEAN, text: 'Čistoća' },
		{ type: RoundWinType.HAND, text: 'Hand' }
	];

	let currentPlayers = getPlayers();
	let remainingPlayers = [];
	let pointCollectionStep = PointCollectionProcessStep.ROUND_WINNER;
	let roundWinner = {};
	let otherPlayerScore = null;

	function pointsCollectedForAllPlayers() {
		return pointCollectionStep === PointCollectionProcessStep.OTHER_PLAYERS_SCORE && remainingPlayers.length === 0;
	}

	function goToNextStep() {

		if (pointsCollectedForAllPlayers()) {
			setPlayers(currentPlayers);

			const dealingPlayerIndex = getDealingPlayerIndex();
			const newDealingPlayerIndex = dealingPlayerIndex + 1 === currentPlayers.size ? 0 : dealingPlayerIndex + 1;
			setDealingPlayerIndex(newDealingPlayerIndex);

			const currentNumberOfRounds = getNumberOfRounds();
			setNumberOfRounds(currentNumberOfRounds + 1);

			goto('/scoreboard');
		}

		if (pointCollectionStep !== PointCollectionProcessStep.OTHER_PLAYERS_SCORE) {
			pointCollectionStep = pointCollectionStep + 1;
			setPlayers(currentPlayers);
		}
	}

	function setRoundWinner(player: string) {
		roundWinner = player;
		remainingPlayers = Array.from(currentPlayers.keys()).filter(p => p !== player);
		goToNextStep();
	}

	function setWinType(winType: RoundWinType) {
		const winnerScore = calculatePointsBasedOnWinType(winType);
		const currentScore = currentPlayers.get(roundWinner);
		currentPlayers.set(roundWinner, currentScore + winnerScore);
		goToNextStep();
	}

	function calculateScoreForOtherPlayers(playerName: string, newScore: number) {

		if (newScore === 0 || newScore < 0) {
			return;
		}

		const currentScore = currentPlayers.get(playerName);
		currentPlayers.set(playerName, currentScore + newScore);
		currentPlayers = currentPlayers;
		remainingPlayers = remainingPlayers.filter(p => p !== playerName);
		otherPlayerScore = null;
		goToNextStep();
	}

	function focusField(element: HTMLInputElement) {
		element.focus();
	}

</script>

<style>
    .button-column {
        display: flex;
        flex-direction: column;
    }

    .player-score-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 1rem;
    }

    .player-score-container > input {
        text-align: center;
    }
</style>

<div>
	{#if pointCollectionStep === PointCollectionProcessStep.ROUND_WINNER}
		<p>Ko je pobedio ovu rundu?</p>
		<div class="button-column">
			{#each currentPlayers as [name, score]}
				<button class="btn-dark" on:click={() => setRoundWinner(name)}>
					{name}
				</button>
			{/each}
		</div>

	{:else if pointCollectionStep === PointCollectionProcessStep.WIN_TYPE}

		<p>Na koji način je {roundWinner} pobedio?</p>

		<div class="button-column">
			{#each ROUND_WIN_TYPES as winType (winType)}
				<button class="btn-dark" on:click={() => setWinType(winType.type)}>{winType.text}</button>
			{/each}
		</div>

	{:else if pointCollectionStep === PointCollectionProcessStep.OTHER_PLAYERS_SCORE && remainingPlayers.length !== 0}
		<div class="player-score-container">
			<label for="playerScore">Broj poena <b>{remainingPlayers[0]}</b></label>
			<input type="number" id="playerScore"
						 bind:value={otherPlayerScore}
						 use:focusField
						 class={otherPlayerScore === 0 || otherPlayerScore < 0 ? 'text-danger input-error' : ''} />
			<button class="btn-primary" on:click={() => calculateScoreForOtherPlayers(remainingPlayers[0], otherPlayerScore)}>
				Upiši poene
			</button>
		</div>
	{/if}
</div>