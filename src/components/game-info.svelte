<script lang="ts">

	import 'cirrus-ui';

	export let currentRound: number;
	export let dealer: string;


</script>

<div class="card" style="width: 80vw;">
	<div class="content u-text-center pt-3">

		<svg fill="none"
				 class="fa-w-10 u-inline-block"
				 height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
				 style="height: 3rem; width: 3rem;">
			<g fill="currentColor">
				<path
					d="m9.4 7.53333c-.2-.26666-.6-.26666-.8 0l-2.375 3.16667c-.13333.1778-.13333.4222 0 .6l2.375 3.1667c.2.2666.6.2666.8 0l2.375-3.1667c.1333-.1778.1333-.4222 0-.6z" />
				<path
					d="m4.09245 5.63868c-.05598-.08398-.05598-.19338 0-.27735l.69954-1.04931c.09895-.14843.31707-.14843.41602 0l.69954 1.0493c.05598.08398.05598.19338 0 .27735l-.69954 1.04931c-.09895.14843-.31707.14843-.41602 0z" />
				<path
					d="m13.208 15.312c-.0989-.1484-.3171-.1484-.416 0l-.6996 1.0493c-.0559.084-.0559.1934 0 .2774l.6996 1.0493c.0989.1484.3171.1484.416 0l.6995-1.0493c.056-.084.056-.1934 0-.2774z" />
				<path clip-rule="evenodd"
							d="m1 4c0-1.65685 1.34315-3 3-3h10c1.1323 0 2.1181.62732 2.6288 1.55337l4.2102 1.12811c1.6004.42883 2.5501 2.07384 2.1213 3.67424l-3.6235 13.52298c-.4288 1.6004-2.0738 2.5501-3.6742 2.1213l-7.46411-2h-4.19849c-1.65685 0-3-1.3431-3-3zm16 14v-13.27661l3.3213.88995c.5335.14294.8501.69127.7071 1.22474l-3.6234 13.52292c-.143.5335-.6913.8501-1.2248.7071l-1.0604-.2841c1.1022-.4437 1.8802-1.523 1.8802-2.784zm-13-15c-.55228 0-1 .44772-1 1v14c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1v-14c0-.55228-.4477-1-1-1z"
							fill-rule="evenodd" />
			</g>
		</svg>

		<p data-testid="currentRound" class="title">Runda broj {currentRound}</p>
		<p data-testid="dealer" class="subtitle">U ovoj rundi deli <b>{dealer}</b></p>

		<a href="/points" class="btn btn-dark">
			Završi ovu rundu
		</a>
	</div>
</div>