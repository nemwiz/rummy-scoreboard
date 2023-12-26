<script lang="ts">
	import 'cirrus-ui';
	import ThrashIcon from '$lib/alternate-trash.svg';
	import { getPlayers, setDealingPlayerIndex, setNumberOfRounds, setPlayers } from '../stores/game.store';
	import { goto } from '$app/navigation';

	const MINIMUM_NUMBER_OF_PLAYERS = 2;

	let playerName = '';
	let players = getPlayers();

	function addPlayer() {
		if (playerName.trim() !== '') {
			players.set(playerName.trim(), 0);
			players = players;
			setPlayers(players);
			playerName = '';
		}
	}

	function startGame() {
		Array.from(players.keys()).forEach(player => {
			players.set(player, 0);
		});
		setPlayers(players);
		setDealingPlayerIndex(0);
		setNumberOfRounds(0);
		goto('/scoreboard');
	}

	function removePlayer(playerName: string) {
		players.delete(playerName);
		players = players;
		setPlayers(players);
	}
</script>

<style>
    .remove-player-icon {
        width: 1rem;
        height: 1rem;
        cursor: pointer;
    }

    .player-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
</style>

<label for="playerName">Unesi ime igrača</label>
<input type="text" id="playerName" bind:value={playerName} />
<button class="btn-dark" on:click={() => addPlayer()}>Dodaj igrača</button>

{#if players.size > 0}
	<div>
		<h3>Igrači:</h3>
		<ol>
			{#each players as [name, score]}
				<li>
					<div class="player-info">
						{name}
						<img src={ThrashIcon}
								 on:click={() => removePlayer(name)}
								 alt="Remove player icon"
								 class="remove-player-icon">
					</div>
				</li>
			{/each}
		</ol>
	</div>
	{#if players.size < MINIMUM_NUMBER_OF_PLAYERS}
		<p>Minimalan broj igrača za remi je {MINIMUM_NUMBER_OF_PLAYERS}</p>
	{/if}
	<button class="btn-primary"
					on:click={() => startGame()}
					disabled={players.size < MINIMUM_NUMBER_OF_PLAYERS}>Započni partiju
	</button>
{/if}
