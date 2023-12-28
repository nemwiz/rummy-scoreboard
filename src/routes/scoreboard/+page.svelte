<script lang="ts">
	import 'cirrus-ui';
	import GameInfo from '../../components/game-info.svelte';
	import { getDealingPlayerIndex, getNumberOfRounds, getPlayers } from '../../stores/game.store';

	const currentPlayers = getPlayers();
	const playersByScore = new Map([...currentPlayers.entries()].sort((a, b) => a[1] - b[1]));
	const dealingPlayerIndex = getDealingPlayerIndex();
	const numberOfRounds = getNumberOfRounds();

	function openDialog() {
		document.querySelector('dialog').showModal();
	}

	function closeDialog() {
		document.querySelector('dialog').close();
	}

</script>

<style>
		.dialog-buttons-container {
				display: flex;
				gap: 1rem;
				justify-content: center;
		}

    ::backdrop {
        background-color: black;
        opacity: 0.75;
    }
</style>

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

<button class="btn btn-dark" on:click={() => openDialog()}>
	Povratak na početnu stranicu
</button>

<dialog>
	<p>Povratak na početnu stranicu će prekinuti ovu partiju i obrisati sve poene.</p>
	<p>Da li želite da nastavite?</p>
	<div class="dialog-buttons-container">
		<a href="/" autofocus class="btn btn-primary">Da, počni ispočetka</a>
		<button class="btn-dark" on:click={() => closeDialog()}>Otkaži</button>
	</div>
</dialog>
