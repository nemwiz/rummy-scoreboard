<script lang="ts">
	import 'cirrus-ui';
	import GameInfo from '../../components/game-info.svelte';
	import { getDealingPlayerIndex, getNumberOfRounds, getPlayers } from '../../stores/game.store';

	const currentPlayers = getPlayers();
	const playersByScore = new Map([...currentPlayers.entries()].sort((a, b) => a[1] - b[1]));
	const dealingPlayerIndex = getDealingPlayerIndex();
	const numberOfRounds = getNumberOfRounds();

</script>

<GameInfo currentRound={numberOfRounds} dealer={Array.from(currentPlayers.keys())[dealingPlayerIndex]}></GameInfo>

<h5>Trenutni rezultat</h5>

<table class="table bordered">
	<thead>
	<tr class="selected">
		<th>Ime</th>
		<th>Broj poena</th>
	</tr>
	</thead>
	<tbody>
	{#each playersByScore as [name, score]}
		<tr>
			<td>{name}</td>
			<td>{score}</td>
		</tr>
	{/each}
	</tbody>
</table>
